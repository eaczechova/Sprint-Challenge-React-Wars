import React from 'react';
import styled from 'styled-components';

const Description = props => {
	console.log(props.data);

	const TextContainer = styled.div`
		padding: 20px;
	`;
	const DescriptionHeading = styled.h2`
		width: 60%;
		text-transform: uppercase;
		font-size: 14px;
		letter-spacing: 7px;
		font-weight: 400;
		color: #6d5130;
		margin: 10px auto 20px;
		padding: 0 5px 20px;
		border-bottom: 1px solid #6d5130;
	`;

	const DescriptionText = styled.p`
		font-size: 13px;
		margin: 0 auto;
		text-align: left;
		line-height: 22px;
		width: 75%;
		padding: 10px 30px;
		color: #fff;
		letter-spacing: 2px;
	`;

	const DescriptionName = styled.span`
		text-transform: uppercase;
		color: #6d5130;
	`;

	return (
		<TextContainer>
			<DescriptionHeading>Description</DescriptionHeading>
			<DescriptionText>
				<DescriptionName>Height: </DescriptionName>
				{props.data.height}
			</DescriptionText>
			<DescriptionText>
				<DescriptionName>Mass: </DescriptionName>
				{props.data.mass}
			</DescriptionText>
			<DescriptionText>
				<DescriptionName>Hair color: </DescriptionName>
				{props.data.hair_color}
			</DescriptionText>
			<DescriptionText>
				<DescriptionName>Eye color: </DescriptionName>
				{props.data.eye_color}
			</DescriptionText>
			<DescriptionText>
				<DescriptionName>Birth year: </DescriptionName>
				{props.data.birth_year}
			</DescriptionText>
		</TextContainer>
	);
};

export default Description;
