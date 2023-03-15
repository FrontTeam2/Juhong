import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const token = `${process.env.REACT_APP_ACCESS_TOKEN}`
const config = {
	headers: {
		Authorization: `Bearer ${token}`,
	},
	// params에 담아서 전달해야 값이 온다.
	params: {
		per_page: 10,
		page: 1,
	},
}

export const getData = async () => {
	try {
		const res = await axios.get(
			process.env.REACT_APP_BACKEND_URL + '/repos/angular/angular-cli/issues',
			config,
		)
		return res.data
	} catch (err) {
		console.log(err)
	}
}

// 전역에서 관리할 데이터 value
export const fetchIssueData = async () => {
	const data = await getData();
	console.log("a")
  return data;
}

// value
const initialState = {
	issues: [],
	getIssueState: {
		loading: false,
		done: false,
		err: null,
	},
}

export const issueSlice = createSlice({
	name: 'issue',
	initialState,
	extraReducers: builder => {
		// get issues

		console.log(builder);

		// 🟡 조회 로딩(pending 상태)
		builder.addCase(getIssues.pending, (state) => {
			state.getIssueState.loading = true
		})
		
		
		// 🟢 조회 성공(fulfilled 상태)
		builder.addCase(getIssues.fulfilled, (state, action) => {
			state.issues.unshift(action.payload)
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
export const getIssues = createAsyncThunk('issue/getIssues', async () => {
	const res = await axios.get('https://api.github.com/repos/angular/angular-cli/issues?Authorization=Bearer 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&"X-GitHub-Api-Version=2022-11-28&sort=created&per_page=50&page=1')
	return res.data
})
