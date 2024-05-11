import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const BasketisEmpty = () => {
	const navigate = useNavigate();
	const navigateToMenu = () => {
		navigate('/menu');
	};
	return (
		<EmptyBasketContainer>
			<h1 className="emptybag-header">Ваша корзина пуста</h1>
			<p className="emptybag-link" onClick={navigateToMenu}>
				перейти в меню
			</p>
		</EmptyBasketContainer>
	);
};
const EmptyBasketContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 450px;
	.emptybag-header {
		font-family: 'Amatic-B';
		font-size: 5rem;
		letter-spacing: 0.25rem;
		margin-bottom: 1.5rem;
		color: rgb(38, 160, 3);
	}
	.emptybag-link {
		position: relative;
		font-family: 'Amatic-R';
		font-weight: 600;
		font-size: 2rem;
		letter-spacing: 0.05rem;
		cursor: pointer;
		color: rgb(38, 160, 3);
	}
	.emptybag-link:after {
		display: block;
		position: absolute;
		left: 0;
		width: 0;
		height: 2px;
		background-color: rgb(180, 104, 179); /*задаём цвет линии*/
		content: '';
		transition: width 0.3s ease-out;
	}

	.emptybag-link:hover:after,
	.emptybag-link:focus:after {
		width: 100%;
	}
`;
