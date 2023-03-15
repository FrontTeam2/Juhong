import { rest } from 'msw'
import { fetchIssueData } from 'reducer/issue'

/**
 * issue 읽기
 */
export const readIssue = rest.get('/api/issue', (req, res, ctx) => {
	return res(ctx.status(200), ctx.json(fetchIssueData))
})
