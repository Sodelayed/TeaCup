import React from 'react';
import styled from 'styled-components';

import { HeaderLogo, HeaderNavigation } from './HeaderComponents';
import { HeaderUsersBlock } from './HeaderComponents/HeaderUsersBlock';
export const Header = () => {
	return (
		<HeaderContainer>
			<HeaderLogo />
			<HeaderNavigation />
			<HeaderUsersBlock />
		</HeaderContainer>
	);
};

const HeaderContainer = styled.nav`
	width: 100%;

	display: flex;
	justify-content: space-evenly;
	color: rgb(38, 160, 3);
	font-size: 3rem;
	padding: 1rem 0;
	font-family: 'Amatic-B';
	top: 0;
	background-color: rgb(251, 249, 213);
	z-index: 1000;
`;
