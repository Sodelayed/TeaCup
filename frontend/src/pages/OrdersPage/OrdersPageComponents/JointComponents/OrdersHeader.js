import React from 'react';
import dayjs from 'dayjs';
import localeObject from '../../../../constants/localeDayjs';
import styled from 'styled-components';

export const OrdersHeader = ({ order }) => {
	return (
		<HeaderContainer>
			<h2 className="header-task">
				Заказ от{' '}
				{dayjs(order.date).locale(localeObject).format('D MMM HH:mm', 'ru')}.
			</h2>
			<h2 className="header-price">
				{order.basketCount}шт. на сумму {order.basketPrice}руб.
			</h2>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	background-color: ${(props) => props.$containerColor};
	height: 50px;
	& .header-task,
	.header-price {
		font-family: 'Amatic-R';
		font-size: 2rem;
		margin-left: 2rem;
	}
`;
