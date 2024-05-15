import { Divider } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { selectBasketsLoader, selectUserBasket } from '../../redux/selectors';
import { useSelector } from 'react-redux';

import { BasketIsFull } from './BasketComponents';
import { Loader } from '../../components/Loader';
import { EmptyContainerBlock } from '../../components';

export const BasketPage = () => {
	const basket = useSelector(selectUserBasket);
	const basketsLoader = useSelector(selectBasketsLoader);
	return (
		<BasketContainer>
			<h1 className="shoppingbag-header">Корзина</h1>
			<Divider />
			{basketsLoader ? (
				<Loader color="secondary" height="600px" />
			) : (
				<>
					{basket.length >= 1 ? (
						<BasketIsFull />
					) : (
						<EmptyContainerBlock text={'Ваша корзина пуста'} />
					)}
				</>
			)}
		</BasketContainer>
	);
};

const BasketContainer = styled.div`
	padding: 15px;
	min-height: 520px;
	.shoppingbag-header {
		font-family: 'Amatic-B';
		font-size: 3rem;
		margin-left: 5rem;
		margin-bottom: 5px;
	}
`;
