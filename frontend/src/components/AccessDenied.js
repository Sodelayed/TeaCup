import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const AccessDenied = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			navigate('/');
		}, 5000);

		return () => clearTimeout(timeoutId);
	});
	return (
		<Container404>
			<h1>У вас не хватает прав</h1>
			<img src="https://i.ibb.co/HXV28V7/403.png" alt="Доступ запрещен" />
		</Container404>
	);
};

const Container404 = styled.div`
	width: 100%;
	margin: auto;
	height: calc(745px - 6rem);
	font-size: 5rem;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	& img {
		width: 500px;
		height: 500px;
	}
	& h1 {
		font-family: 'Amatic-B';
		letter-spacing: 0.5rem;
		color: rgb(243, 140, 131);
		text-shadow: rgb(82, 43, 36) -1px 2px;
	}
`;
