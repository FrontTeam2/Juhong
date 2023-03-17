import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { searchActions } from 'store/search'
import Filter from './components/Filter'
import { useState } from 'react'

function LeftSidebar() {
	const dispatch = useDispatch() // dispatch를 이용한 response 전달
	const navigate = useNavigate() // url 경로 이동용 내비게이션

	// issue 갯수 관리 state
	const [per_page, setPer_page] = useState(10)

	/**
	 * 현재 url경로의 일부분
	 * @ex) /angular/angular-cli
	 */
	const currentLocation = useLocation()
		.pathname.split('/')
		.slice(0, 3)
		.join('/')

	/**
	 * 나열 타입 변경 코드(비동기)
	 * @param {String} sortType 선택된 나열 타입
	 */
	const changeSort = sortType => {
		setPer_page(10)
		dispatch(
			searchActions.editSearchText(`https://github.com${currentLocation}`),
		)
		navigate(`${currentLocation}/1/${sortType}/10`)
	}

	return (
		<FULL>
			<Title>
				<h1>Issue List</h1>
				<SortArea>
					<button onClick={() => changeSort('created')}>생성순</button>
					<button onClick={() => changeSort('updated')}>업데이트순</button>
					<button onClick={() => changeSort('comments')}>댓글순</button>
				</SortArea>
				<Filter per_page={per_page} setPer_page={setPer_page} />
			</Title>
			<Outlet />
		</FULL>
	)
}
export default LeftSidebar

const FULL = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`

const Title = styled.div`
	width: 40%;
	text-align: center;
`

const SortArea = styled.div`
	display: flex;
	justify-content: space-evenly;
`

const S = {
	LeftSidebar,
}
