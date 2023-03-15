import { Outlet } from 'react-router'
import Header from './Layout/Header/Header'

function Layout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}
export default Layout
