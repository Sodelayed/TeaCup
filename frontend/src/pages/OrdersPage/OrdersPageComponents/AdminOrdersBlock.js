import React from 'react';

import styled from 'styled-components';

import { AdminOrdersTime } from './AdminOrdersComponents';
import { colorFromState } from './OrdersTimerFunctions/color-from-state';
import { OrdersHeader, OrdersDetails } from './JointComponents';

export const AdminOrdersBlock = ({ order, key }) => {
	const color = colorFromState(order);
	return (
		<CurrentOrderContainer key={key} $containerColor={color}>
			<OrdersHeader order={order} />
			<AdminOrdersTime order={order} />
			<OrdersDetails order={order} />
		</CurrentOrderContainer>
	);
};

const CurrentOrderContainer = styled.div`
	margin-top: 1rem;
	width: 100%;
	background-color: ${(props) => props.$containerColor};
`;
