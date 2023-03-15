import styled from 'styled-components'

const Filter = () => {
	return (
		<>
			<Selector name="filter">
				<option value={10}>10개</option>
				<option value={20}>20개</option>
				<option value={50}>50개</option>
			</Selector>
		</>
	)
}
export default Filter

const Selector = styled.select`
	float: right;
`
