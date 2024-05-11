import React from 'react';
import styled from 'styled-components';

export const WorkTitle = () => {
	return (
		<WorkTitleContainer>
			<span>Работа у нас</span>
		</WorkTitleContainer>
	);
};

const WorkTitleContainer = styled.div`
	display: block;
	width: 100%;
	margin: auto;
	height: calc(745px - 6rem);
	min-height: 654.5px;
	background-image: url('https://i.ibb.co/7pz44Pn/image.png');
	background-size: cover;
	font-size: 12rem;
	text-align: center;
	& span {
		font-family: 'Amatic-B';
		display: inline-block;
		margin-top: calc(6rem + 6rem);
		letter-spacing: 2rem;
		color: rgb(38, 160, 3);
		font-weight: 900;
		cursor: default;
	}
`;
