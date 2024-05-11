import React from 'react';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId, selectUserRole } from '../../../redux/selectors';
import { ROLE } from '../../../constants/role';
import { useNavigate } from 'react-router-dom';

import { CLOSE_PRODUCT_MODAL, addToBasket } from '../../../redux/actions';

export const PushToBasket = ({ selectedPrice, product, volume }) => {
	const roleId = useSelector(selectUserRole);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userId = useSelector(selectUserId);
	const preparedProduct = {
		name: product.name,
		img: product.img,
		price: selectedPrice,
		volume: Object.keys(product.price)[volume],
		id: product.id,
	};
	const closeProductModal = () => {
		dispatch(CLOSE_PRODUCT_MODAL);
	};
	const func = () => {
		closeProductModal();
		if (roleId === ROLE.GUEST) return navigate('/login');
		dispatch(addToBasket(preparedProduct, userId));
	};
	return (
		<PushContainer>
			<h1 className="productModalPrice">{selectedPrice}₽</h1>
			<StyledProductButton
				variant="contained"
				endIcon={<AddShoppingCartIcon />}
				onClick={func}
			>
				В корзину
			</StyledProductButton>
		</PushContainer>
	);
};
const PushContainer = styled.div`
	position: absolute;
	top: 80%;
	display: flex;
	width: 90%;
	justify-content: space-evenly;
	align-items: center;
	color: rgb(38, 160, 3);
	.productModalPrice {
		font-family: 'Amatic-B';
		font-size: 5rem;
	}
`;
const StyledProductButton = styled(Button)`
	height: 3rem;
`;
