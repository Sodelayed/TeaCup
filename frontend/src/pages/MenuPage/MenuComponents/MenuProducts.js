import React from 'react';
import { ProductCard } from './ProductCard';
import styled from 'styled-components';
import { selectProducts } from '../../../redux/selectors';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

export const MenuProducts = () => {
	const products = useSelector(selectProducts);

	return (
		<ProductsContainer>
			{products.length === 0 ? (
				<div className="searchError">ничего не найдено</div>
			) : products ? (
				products.map((el, index) => {
					return <ProductCard el={el} key={index} />;
				})
			) : (
				<CircularProgress color="secondary" />
			)}
		</ProductsContainer>
	);
};

const ProductsContainer = styled.div`
	min-height: 860px;
	display: flex;
	flex-direction: row;

	flex-wrap: wrap;
	.searchError {
		font-family: 'Amatic-B';
		font-size: 5rem;
		letter-spacing: 0.25rem;

		color: rgb(38, 160, 3);
		margin: auto;
	}
`;
