import { Axios } from './@core'

/**
 * gitHub Oprn API에게 url로 요청하는 모듈
 * @param {String} owner - 소유자명
 * @param {String} repository - repository명
 * @param {Object} params - 기타 params
 */
export const IssuesAPI = {
	getData(owner, repository, params) {
		return Axios.get(`/repos/${owner}/${repository}/issues`, { params })
	},
}
