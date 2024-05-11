import React from 'react';
import styled from 'styled-components';
import { GiCoffeeMug } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

export const HeaderLogo = () => {
	return (
		<LogoContainer>
			<StyledIconBtn to="/">
				<GiCoffeeMug />
			</StyledIconBtn>
		</LogoContainer>
	);
};

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
`;
const StyledIconBtn = styled(NavLink)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: rgb(38, 160, 3);
`;
