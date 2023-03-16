import styled from 'styled-components'
// import Pagination from 'pages/List/components/Pagination'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { searchActions } from 'store/search'

function LeftSidebar() {
	const dispatch = useDispatch() // dispatch를 이용한 response 전달
	const navigate = useNavigate() // url 경로 이동용 내비게이션

	let currentLocation = useLocation().pathname.split('/').slice(0, 4).join('/')

	/**
	 * 나열순 state 기본(생성순:created)
	 */
	const [sort, setSort] = useState('created')

	/**
	 * 나열 타입 변경 코드(비동기)
	 * @param {String} sortType - 선택된 나열 타입
	 * 비동기 실행을 위해 async와 await으로 처리
	 */
	const changeSort = sortType => {
		dispatch(
			searchActions.editSearchText(
				`https://github.com${currentLocation}/${sortType}/10`,
			),
		)
		const splitText = currentLocation.split('/')
		const owner = splitText[0]
		const repository = splitText[1]
		navigate(`${currentLocation}/${sortType}/10`)
	}

	return (
		<>
			<LeftSide>
				<Title>
					<h1>Issue List (Title)</h1>
					<SortArea>
						<button onClick={() => changeSort('created')}>생성순</button>
						<button onClick={() => changeSort('updated')}>업데이트순</button>
						<button onClick={() => changeSort('comments')}>댓글순</button>
					</SortArea>
				</Title>
				<Outlet />
			</LeftSide>
			{/* <Pagination /> */}
		</>
	)
}
export default LeftSidebar

const LeftSide = styled.div`
	float: left;
	width: 100%;
	display: flex;
`

const Title = styled.div`
	width: 40%;
`

const SortArea = styled.div`
	display: flex;
	justify-content: space-evenly;
`

const S = {
	LeftSidebar,
}
