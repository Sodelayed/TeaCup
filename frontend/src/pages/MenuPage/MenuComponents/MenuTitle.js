import React from 'react';
import styled from 'styled-components';

export const MenuTitle = () => {
	return (
		<MenuTitleContainer>
			<span>Меню</span>
		</MenuTitleContainer>
	);
};

const MenuTitleContainer = styled.div`
	display: block;
	width: 100%;
	margin: auto;
	height: calc(745px - 5rem);
	min-height: 654.5px;
	background-image: url('https://i.ibb.co/f4H9Cr5/image.png');
	color: black;
	background-size: cover;
	font-size: 12rem;
	text-align: center;
	scroll-behavior: smooth;
	margin-bottom: 0px;

	& span {
		font-family: 'Amatic-B';
		display: inline-block;
		margin-top: calc(6rem + 6rem);
		letter-spacing: 2rem;
		color: rgb(38, 160, 3);
		font-weight: 900;
		text-shadow: 0px 0px 1px rgb(125, 101, 123);
		cursor: default;
	}
`;
