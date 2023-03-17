import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IssuesAPI } from '../apis/issues'

/**
 * Dispatcher에서 사용되는 value 기본 형태
 */
const initialState = {
	issues: [],
	getIssueState: {
		loading: true,
		done: false,
		err: null,
	},
}

/**
 * Issue 조회
 */
export const getIssues = createAsyncThunk(
	'issue/getIssues',
	async ({ owner, repository, params }) => {
		console.log('dispatch ----> ', owner, repository, params)
		const res = await IssuesAPI.getData(owner, repository, params)
		return res.data
	},
)

export const issueSlice = createSlice({
	name: 'issue',
	initialState,
	extraReducers: builder => {
		// get issues

		// 🟡 조회 로딩(pending 상태)
		builder.addCase(getIssues.pending, state => {
			state.getIssueState.loading = true
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
