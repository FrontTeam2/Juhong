import React from 'react'
import { marked } from 'marked'
import styled from 'styled-components'

const Card = ({ issue }) => {
  let html;

  console.log(typeof(issue.body)== "string" );
  
	if (typeof(issue.body)== "string") {
		html = marked.parse(issue.body)
	}

	return (
		<>
			<CardBox>
				<p>{issue.number}</p>
				<h1>{issue.title}</h1>
				<p>{issue.comments}</p>
				<div dangerouslySetInnerHTML={{ __html: html }}></div>
				<p>{issue.user.login}</p>
				<p>{issue.created_at}</p>
				<p>{issue.updated_at}</p>
			</CardBox>
		</>
	)
}

const CardBox = styled.div`
	margin: 5% 0%;
	background-color: #0affcc;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	position: relative;
  height : 0.4%;
`

export default Card
