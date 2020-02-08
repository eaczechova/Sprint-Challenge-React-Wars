import React from 'react';
import Description from './Description';
import styled from 'styled-components';

const Card = props => {
	const CardContainer = styled.div`
		width: 100%;
		background: #fff;
		margin: 20px auto;
		padding: 10px;
		background: linear-gradient(
			176deg,
			rgba(143, 158, 158, 1) 0%,
			rgba(146, 182, 219, 1) 55%
		);

		@media (min-width: 700px) {
			width: 30%;
			border-radius: 5px;
			box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

			&:hover {
				box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
			}
		}
	`;

	const CardHeading = styled.h1`
		font-size: 25px;
		padding: 20px;
		letter-spacing: 7px;
		font-weight: 300;
		color: lightgrey;
		border-radius: 5px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	`;

	return (
		<CardContainer>
			<CardHeading>{props.data.name}</CardHeading>
			<Description data={props.data} />
		</CardContainer>
	);
};

export default Card;
