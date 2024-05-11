import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
export const PageNotFound = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			navigate('/');
		}, 5000);

		return () => clearTimeout(timeoutId);
	});
	return (
		<Container404>
			<h1> Страница не найдена</h1>
			<img src="https://i.ibb.co/djv0GCQ/404.png" alt="Страница не найдена" />
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
		color: rgb(210, 104, 204);
		text-shadow: rgb(137, 66, 134) -1px 2px;
	}
`;
