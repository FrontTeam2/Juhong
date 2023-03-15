import Layout from 'components/Layout/Layout'
import DetailPage from 'pages/Detail'
import IssuePage from 'pages/List'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getIssues } from 'reducer/issue'
import styled from 'styled-components'

const Routing = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getIssues())
	})

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path={'/'} element={<IssuePage />} />
					<Route path={'detail'} element={<DetailPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default Routing

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
`

const S = {
	Flex,
}
