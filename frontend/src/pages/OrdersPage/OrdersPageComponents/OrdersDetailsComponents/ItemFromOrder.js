import React from 'react';
import { Divider } from '@mui/material';

import styled from 'styled-components';

import { ItemInfo } from './OrdersItemComponents';

export const ItemFromOrder = ({ order, product, index }) => {
	return (
		<ItemsContainer key={index}>
			<ItemInfo product={product} />
			{index + 1 !== order.items.length && <Divider orientation="horizontal" />}
		</ItemsContainer>
	);
};
const ItemsContainer = styled.div`
	position: relative;
`;
