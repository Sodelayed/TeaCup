import React from 'react';
import styled from 'styled-components';

import { OrdersHeader, OrdersDetails } from './JointComponents';
export const ClientOrdersBlock = ({ order }) => {
	return (
		<CurrentOrderContainer>
			<OrdersHeader order={order} />
			<OrdersDetails order={order} />
		</CurrentOrderContainer>
	);
};

const CurrentOrderContainer = styled.div`
	margin-top: 1rem;
	width: 100%;
	background-color: rgb(186, 104, 180, 0.2);
`;
