import React from 'react';
import { PiUserCircleLight } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import { ROLE } from '../../../constants/role';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../../redux/selectors';
import { TbUserQuestion } from 'react-icons/tb';
import styled from 'styled-components';

export const HeaderUsersBlock = () => {
	const roleId = useSelector(selectUserRole);
	const USER_PATH = roleId === ROLE.BUYER ? '/profile/basket' : '/profile/orders';
	return (
		<UsersBtns>
			{roleId === ROLE.GUEST ? (
				<StyledIconBtn to="/login">
					<TbUserQuestion />
					<p>ВОЙТИ</p>
				</StyledIconBtn>
			) : (
				<StyledIconBtn to={USER_PATH}>
					<PiUserCircleLight />
					<p>АККАУНТ</p>
				</StyledIconBtn>
			)}
		</UsersBtns>
	);
};
const UsersBtns = styled.div`
	transition: 1.2s ease;
	& :hover {
		transition: 0.2s ease;
		color: #b468b3;
	}
	p {
		font-size: 1.25rem;
		font-family: 'Amatic-R';
	}
`;

const StyledIconBtn = styled(NavLink)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: rgb(38, 160, 3);
`;
