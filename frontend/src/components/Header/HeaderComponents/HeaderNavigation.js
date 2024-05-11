import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderNavigation = () => {
	return (
		<HeaderBtns>
			<StyledLink to="/menu">меню</StyledLink>
			<StyledLink to="/location">мы на карте</StyledLink>
			<StyledLink to="/work">работа</StyledLink>
			<StyledLink to="/test">тест</StyledLink>
		</HeaderBtns>
	);
};

const HeaderBtns = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const StyledLink = styled(NavLink)`
	margin: 0 1.5rem;
	cursor: pointer;
	transition: 0.7s ease;
	color: rgb(38, 160, 3);
	text-decoration: none;
	&:hover {
		transition: 0.2s ease;
		rotate: 5deg;
		color: rgb(255, 251, 193);
		text-shadow:
			0 0 5px rgb(38, 160, 3),
			0 0 25px rgb(38, 160, 3);
	}
`;
