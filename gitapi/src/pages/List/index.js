import styled from '@emotion/styled'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { IssuesAPI } from '../../apis/issues'
import { searchActions } from '../../store/search'
import IssueCard from './components/Box'

function ListPage() {
	const [issues, setIssues] = useState([])
	const { owner, repository, page, sort, per_page } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			searchActions.editSearchText(`https://github.com/${owner}/${repository}`),
		)
	}, [])

	const getData = useCallback(async () => {
		try {
			const { data } = await IssuesAPI.getData(owner, repository, {
				page,
				sort,
				per_page,
			})
			setIssues(data)
		} catch (err) {
			console.log(err)
		}
	}, [page, sort, per_page])

	useEffect(() => {
		getData()
	}, [getData])

	return (
		<S.Wrapper>
			{issues.map(issue => (
				<IssueCard
					number={`🌎 ${issue.number}`}
					title={issue.title}
					body={
						issue.body
							? issue.body.split('').slice(0, 99).join('') + ' ...'
							: issue.body
					}
					commentLen={issue.labels.length}
					updatedAt={issue.updated_at}
				/>
			))}
		</S.Wrapper>
	)
}
export default ListPage

const Wrapper = styled.div`
	width: 50%;
	margin: 20px auto;
`

const S = { Wrapper }
