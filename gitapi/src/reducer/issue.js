import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import TokenService from 'repository/TokenService'

/**
 * 요청시 담아줄 config 데이터
 */
const config = {
	headers: {
		Authorization: `${TokenService.getToken()}`,
	},
	// params에 담아서 전달해야 값이 온다.
	params: {
		per_page: 10, // 전역에서 갯수를 받아와야 함
		page: 1, // 전역에서 페이지 번호를 받아와야 함
		sort: 'created',
	},
}

// value
const initialState = {
	issues: [],
	getIssueState: {
		loading: true,
		done: false,
		err: null,
	},
}

export const issueSlice = createSlice({
	name: 'issue',
	initialState,
	extraReducers: builder => {
		// get issues

		// 🟡 조회 로딩(pending 상태)
		builder.addCase(getIssues.pending, state => {
			state.issues = []
			state.getIssueState.loading = true
			state.getIssueState.done = false
			state.getIssueState.err = null
		})

		// 🟢 조회 성공(fulfilled 상태)
		builder.addCase(getIssues.fulfilled, (state, action) => {
			state.issues = action.payload
			state.getIssueState.loading = false
			state.getIssueState.done = true
			state.getIssueState.err = null
		})

		// 🔴 조회 실패(rejected 상태)
		builder.addCase(getIssues.rejected, (state, action) => {
			state.getIssueState.loading = false
			state.getIssueState.done = true
			state.getIssueState.err = action.payload
		})
	},
})

/**
 * Issue 조회
 */
export const getIssues = createAsyncThunk(
	'issue/getIssues',
	async (sort, per_page) => {
		config.params.sort = sort
		config.params.per_page = per_page
		try {
			const res = await axios.get(
				process.env.REACT_APP_BACKEND_URL + '/repos/angular/angular-cli/issues',
				config,
			)
			return res.data
		} catch (err) {
			console.log(err)
		}
	},
)
