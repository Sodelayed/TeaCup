import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserId } from '../../../../../redux/selectors';
import { addToBasket } from '../../../../../redux/actions';
import styled from 'styled-components';
import { Button } from '@mui/material';

export const BuyerButton = ({ item }) => {
	const dispatch = useDispatch();
	const userId = useSelector(selectUserId);

	const fromJournalToBasket = (product) => {
		console.log(product);
		product.price = (Number(product.price) / Number(product.count)).toString();
		delete product.count;
		dispatch(addToBasket(product, userId));
	};
	return (
		<StyledProductButton
			variant="contained"
			endIcon={<AddShoppingCartIcon />}
			onClick={() => fromJournalToBasket(item)}
		>
			В корзину
		</StyledProductButton>
	);
};

const StyledProductButton = styled(Button)`
	height: 3rem;
`;
