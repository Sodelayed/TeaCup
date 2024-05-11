import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUserBasket } from '../../../../redux/selectors';
import { useNavigate } from 'react-router-dom';

export const BasketTicket = () => {
	const navigate = useNavigate();
	const basket = useSelector(selectUserBasket);
	const [resultPrice, setResultPrice] = useState();
	const [resultCount, setResultCount] = useState();
	useEffect(() => {
		let increasedPrices = 0;
		let increasedCount = 0;
		basket.map((el) => {
			return (
				(increasedPrices += Number(el.finalPrice)),
				(increasedCount += Number(el.count))
			);
		});
		setResultPrice(increasedPrices);
		setResultCount(increasedCount);
	}, [basket]);

	return (
		<TicketContainer>
			<Button
				variant="contained"
				color="secondary"
				onClick={() => navigate('/checkout')}
			>
				ЗАКАЗАТЬ
			</Button>
			<div className="ticket-count">
				<p className="ticket-count-title">ВАША КОРЗИНА</p>
				<p className="ticket-count-result">{resultCount} товара</p>
			</div>
			<div className="ticket-price">
				<p className="ticket-price-title">СУММА</p>
				<p className="ticket-price-result">{resultPrice}₽</p>
			</div>
		</TicketContainer>
	);
};

const TicketContainer = styled.div`
	min-height: 450px;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Amatic-B';
	.MuiButton-root {
		margin-top: 20px;
		width: 80%;
	}
	.ticket-count,
	.ticket-price {
		width: 90%;
		margin-top: 2rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.ticket-price {
		margin-top: 0.25rem;
	}
	.ticket-count-title {
		font-size: 2rem;
	}
	.ticket-count-result,
	.ticket-price-title,
	.ticket-price-result {
		font-size: 1.5rem;
		color: rgb(0, 0, 0, 0.75);
	}
`;
