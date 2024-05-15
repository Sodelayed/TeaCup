import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { selectUserRole } from '../redux/selectors';
import { ROLE } from '../constants/role';

export const EmptyContainerBlock = ({ text }) => {
	const navigate = useNavigate();
	const roleId = useSelector(selectUserRole);
	const navigateToMenu = () => {
		navigate('/menu');
	};
	return (
		<EmptyContainer>
			<h1 className="empty-container-header">{text}</h1>
			{roleId === ROLE.BUYER && (
				<p className="empty-container-link" onClick={navigateToMenu}>
					перейти в меню
				</p>
			)}
		</EmptyContainer>
	);
};
const EmptyContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 450px;
	.empty-container-header {
		font-family: 'Amatic-B';
		font-size: 5rem;
		letter-spacing: 0.25rem;
		margin-bottom: 1.5rem;
		color: rgb(38, 160, 3);
	}
	.empty-container-link {
		position: relative;
		font-family: 'Amatic-R';
		font-weight: 600;
		font-size: 2rem;
		letter-spacing: 0.05rem;
		cursor: pointer;
		color: rgb(38, 160, 3);
		transition: 0.2s ease;
	}

	.empty-container-link:hover {
		transition: 1.2s ease;
		font-size: 2.5rem;
		color: rgb(180, 104, 179);
	}
	.empty-container-link:after {
		display: block;
		position: absolute;
		left: 0;
		width: 0;
		height: 2px;
		background-color: rgb(180, 104, 179);
		content: '';
		transition: width 0.3s ease-out;
	}

	.empty-container-link:hover:after,
	.empty-container-link:focus:after {
		width: 100%;
	}
`;
