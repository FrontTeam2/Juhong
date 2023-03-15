import { Provider } from 'react-redux'
import Routing from 'routes/Routing'
import { store } from 'store/store'
// import { worker } from '__issue__/browser'

function App() {
	// npx msw init public/
	// if (process.env.NODE_ENV === 'development') {
	// }
	// worker.start()
	
	return (
		<Provider store={store}>
			<Routing />
		</Provider>
	)
}

export default App
