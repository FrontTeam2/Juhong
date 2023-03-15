import Pagination from 'pages/List/components/Pagination'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

function Layout() {
	return (
		<>
			<S.Header>
				<Title>
					<h1>Issue List (Title)</h1>
					<SortArea>
						<button>생성순</button>
						<button>업데이트순</button>
						<button>댓글순</button>
					</SortArea>
				</Title>
				<Outlet />
			</S.Header>
			<Pagination />
		</>
	)
}
export default Layout

const Header = styled.div`
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
	Header,
}
