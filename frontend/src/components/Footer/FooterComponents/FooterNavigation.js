import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../../redux/selectors';
import { ROLE } from '../../../constants/role';

export const FooterNavigation = () => {
	const role_id = useSelector(selectUserRole);
	return (
		<NavigationContainer item xs={4}>
			<ul>
				<li>
					<StyledLink to="/" onClick={() => window.scroll(0, 0)}>
						Главная
					</StyledLink>
				</li>
				<li>
					<StyledLink to="/menu" onClick={() => window.scroll(0, 0)}>
						Меню
					</StyledLink>
				</li>
				<li>
					<StyledLink to="/location" onClick={() => window.scroll(0, 0)}>
						Мы на карте
					</StyledLink>
				</li>
				<li>
					<StyledLink to="/work" onClick={() => window.scroll(0, 0)}>
						Работа
					</StyledLink>
				</li>

				{role_id === ROLE.GUEST ? (
					<li>
						<StyledLink to="/login" onClick={() => window.scroll(0, 0)}>
							Авторизация
						</StyledLink>
					</li>
				) : (
					<div></div>
				)}
			</ul>
		</NavigationContainer>
	);
};

const NavigationContainer = styled(Grid)`
	display: flex;
	justify-content: center;
	font-size: 3.5rem;

	ul > li {
		min-width: 300px;
		text-align: center;
	}
`;
const StyledLink = styled(NavLink)`
	margin: 0 1.5rem;
	cursor: pointer;
	transition: 0.7s ease;
	color: rgb(251, 249, 213);
	text-decoration: none;
	&:hover {
		transition: 0.2s ease;
		letter-spacing: 0.15rem;
		color: rgb(180, 170, 245);
		text-shadow:
			0 0 5px rgb(251, 249, 213),
			0 0 25px rgb(251, 249, 213);
	}
`;
