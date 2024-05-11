import React from 'react';
import styled from 'styled-components';
import { Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { openProductModal } from '../../../redux/actions';
import { productFontSize } from './product-font-size';

export const ProductCard = ({ el }) => {
	const dispatch = useDispatch();
	const sortedPrices = Object.values(el.price).sort((el1, el2) =>
		Number(el1) > Number(el2) ? 1 : -1,
	);

	const selectProduct = () => {
		dispatch(openProductModal(el));
	};
	const fontSize = productFontSize(el.name);
	return (
		<ProductCardContainer
			direction="column"
			justifyContent="space-evenly"
			alignItems="center"
			spacing={1}
			onClick={selectProduct}
			$productFontSize={fontSize}
		>
			<img src={el.img} alt="tea" />
			<span className="productName">{el.name}</span>
			<span className="productPrice">от {sortedPrices[0]}₽</span>
		</ProductCardContainer>
	);
};

const ProductCardContainer = styled(Stack)`
	width: 230px;
	height: 350px;
	padding: 1rem 0;
	border-radius: 30px;
	user-select: none;
	cursor: pointer;
	margin-bottom: 3rem;
	margin-left: 3.15rem;
	transition: 1.2s ease;
	& img {
		width: 180px;
		min-height: 245px;
	}
	& .productName {
		font-family: 'Amatic-R';
		color: rgb(180, 104, 179);
		font-size: ${(props) => props.$productFontSize};
		letter-spacing: 0.2rem;
		text-align: center;
	}
	& .productPrice {
		font-family: 'Amatic-B';
		font-size: 2rem;
		letter-spacing: 0.1rem;
		text-align: center;
	}
	&:hover {
		transition: 0.2s ease;
		background-color: rgba(38, 160, 3, 0.08);
	}
`;
