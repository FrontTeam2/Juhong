import styled from 'styled-components'
import Card from './Card/Card'
import Filter from './Filter/Filter'

const List = ({ issueList }) => {
	return (
		<>
			<ListWrapper>
				<Filter />
				{issueList &&
					issueList.map((issue, index) => (
						<Card issue={issue} key={index}></Card>
					))}
			</ListWrapper>
		</>
	)
}
export default List

const ListWrapper = styled.div`
	width: 70%;
	text-align: center;
`
