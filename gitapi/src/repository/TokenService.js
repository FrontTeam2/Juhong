/**
 * 토큰화 모듈
 */

const TokenService = {
	// get (token 가져오기)
	async getToken() {
		return `${process.env.REACT_APP_ACCESS_TOKEN}`
	},
}
export default TokenService
