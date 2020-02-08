import React from 'react';
import Description from './Description';
import styled from 'styled-components';

const Card = props => {
	console.log('props in card', props.data);
	const CardContainer = styled.div`
		width: 100%;
		background: #fff;
		margin: 20px auto;
		padding: 10px;

		@media (min-width: 700px) {
			width: 30%;
			border-radius: 5px;
		}
	`;

	const CardHeading = styled.h1`
		font-size: 25px;
		padding: 25px;
		letter-spacing: 7px;
		font-weight: 400;
	`;

	return (
		<CardContainer>
			<CardHeading>{props.data.name}</CardHeading>
			<Description data={props.data} />
		</CardContainer>
	);
};

export default Card;
