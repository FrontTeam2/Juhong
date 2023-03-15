import { useSelector } from 'react-redux'
import List from './components/List/List'

function IssuePage() {
	// const dispatch = useDispatch()
	
	// useEffect(() => {
	// 	dispatch(getIssues())
	// })
	const issueList = useSelector(state => state.issue.issues[0])


	return (
		<>
			<List issueList={issueList} />
		</>
	)
}
export default IssuePage
