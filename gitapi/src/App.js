import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
	const [isData, setIsData] = useState()

	useEffect(() => {
		const token = `${process.env.REACT_APP_ACCESS_TOKEN}`
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
		const getData = async () => {
			try {
				const res = await axios.get(
					process.env.REACT_APP_BACKEND_URL +
						'/repos/angular/angular-cli/issues',
					config,
				)
				setIsData(res.data)
			} catch (err) {
				console.log(err)
			}
		}
		getData()
	}, [])
	console.log(isData)

	return (
		<>
			<h1>:)</h1>
			{isData && isData.map((data, index) => <div key={index}>{data.url}</div>)}
		</>
	)
}

export default App
