import styled from 'styled-components'

const Pagination = () => {
	return (
		<PaginationArea>
			<h1>⏪ ◀️ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ▶️ ⏩</h1>
		</PaginationArea>
	)
}
export default Pagination

const PaginationArea = styled.div`
	display: inline-block;
	width: 100%;
	text-align: center;
`
