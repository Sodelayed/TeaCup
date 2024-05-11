import React from 'react';
import { useTimer } from '../OrdersTimerFunctions/use-timer';
import styled from 'styled-components';
export const AdminOrdersTime = ({ order }) => {
	const timeLeft = useTimer(order);

	if (order.state === 'ready') {
		return <ReadyBlock>Заказ готов!</ReadyBlock>;
	}

	if (order.state === 'time left') {
		return <OverBlock>Время вышло</OverBlock>;
	}

	return (
		<InitialBlock className="current-order-details-time">
			Клиент: {order.client}. Приготовить к: {order.selectedTime}. Оставшееся время
			: {timeLeft}.
		</InitialBlock>
	);
};

const ReadyBlock = styled.div`
	width: 100%;
	background-color: ${(props) => props.$containerColor};
	font-family: 'Amatic-R';
	font-size: 2rem;
	margin-left: 2rem;
	color: rgb(18 71 1);
`;
const OverBlock = styled.div`
	width: 100%;
	background-color: ${(props) => props.$containerColor};
	font-family: 'Amatic-R';
	font-size: 2rem;
	margin-left: 2rem;
	color: rgb(136 1 1);
`;

const InitialBlock = styled.div`
	width: 100%;
	background-color: ${(props) => props.$containerColor};
	font-family: 'Amatic-R';
	font-size: 2rem;
	margin-left: 2rem;
`;
