import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { searchActions } from 'store/search'
import styled from 'styled-components'

const Filter = ({ per_page, setPer_page }) => {
	const dispatch = useDispatch() // dispatch를 이용한 response 전달
	const navigate = useNavigate() // url 경로 이동용 내비게이션

	/**
	 * 현재 url경로의 일부분
	 * @ex) /angular/angular-cli/1/created
	 */

	const currentLocation = useLocation()
		.pathname.split('/')
		.slice(0, 5)
		.join('/')

	/**
	 * 나열 갯수 변경 코드(비동기)
	 * @param {number} per_page 선택된 갯수
	 */
	const onChangePerPage = e => {
		setPer_page(e.target.value)
		dispatch(
			searchActions.editSearchText(`https://github.com${currentLocation}`),
		)
		navigate(`${currentLocation}/${e.target.value}`)
	}

	return (
		<>
			<Selector value={per_page} name="filter" onChange={onChangePerPage}>
				<option value={10}>10개</option>
				<option value={20}>20개</option>
				<option value={50}>50개</option>
			</Selector>
		</>
	)
}
export default Filter

const Selector = styled.select`
	float: right;
`
