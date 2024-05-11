import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import {
	VolumeOfProduct,
	TabsOfProduct,
	PushToBasket,
} from './ProductModalInfoComponents';
import { useSelector } from 'react-redux';
import { selectProduct } from '../../redux/selectors';
import styled from 'styled-components';

import { headerFontSize } from './header-font-size';
export const ProductModalInfo = () => {
	const [alignment, setAlignment] = useState(0);
	useEffect(() => {
		setAlignment(0);
	}, []);

	const product = useSelector(selectProduct);

	const handleChangeButtons = (event, newAlignment) => {
		if (newAlignment !== null) {
			setAlignment(newAlignment);
		}
	};
	const fontSize = headerFontSize(product.name);
	return (
		<ProductInfoContainer $headerFontSize={fontSize}>
			<div className="modalLeft">
				<div className="productBackground">
					<img src={product.img} alt="tea" />
				</div>
			</div>
			<div className="modalRight">
				<h1 className="productModalName">{product.name}</h1>
				<Box sx={{ width: '90%' }}>
					<TabsOfProduct
						description={product.description}
						compound={product.compound}
					/>
					<VolumeOfProduct
						alignment={alignment}
						handleChangeButtons={handleChangeButtons}
						price={product.price}
					/>
					<PushToBasket
						selectedPrice={Object.values(product.price)[alignment]}
						product={product}
						volume={alignment}
					/>
				</Box>
			</div>
		</ProductInfoContainer>
	);
};

const ProductInfoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	height: 100%;
	width: 100%;
	& .modalLeft,
	.modalRight {
		width: 50%;
		height: 100%;
	}
	& .modalLeft {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	& .modalRight {
		position: relative;
	}
	& img {
		width: 280px;
		height: 380px;
	}
	.productModalName {
		margin-top: 2rem;
		margin-bottom: 1rem;
		font-family: 'Amatic-B';
		font-size: ${(props) => props.$headerFontSize};
		color: rgb(213, 147, 211);
		white-space: nowrap;
		z-index: 5;
	}

	.productBackground {
		width: 95%;
		height: 95%;
		background-image: url(images/product-background.jpg);
		background-size: cover;
		border-radius: 13rem;
		padding: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
