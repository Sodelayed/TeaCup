import React from 'react';
import styled from 'styled-components';

import { BasketDeleter, BasketCounter } from './BasketCardComponents';

export const BasketCard = ({ element, id, count, finalPrice }) => {
	return (
		<BasketCardContainer>
			<BasketDeleter basketId={id} />
			<img src={element.img} alt="продукт" />
			<div className="shoppingbag-card-info">
				<p className="shoppingbag-card-info-name">{element.name}</p>
				<p className="shoppingbag-card-info-another">Объем: {element.volume}</p>
			</div>
			<BasketCounter element={element} basketId={id} count={count} />
			<p className="shoppingbag-card-info-price">{finalPrice}₽</p>
		</BasketCardContainer>
	);
};

const BasketCardContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 1rem 0;
	img {
		width: 84px;
		height: 114px;
	}
	.shoppingbag-card-info {
		display: flex;
		flex-direction: column;
	}
	.shoppingbag-card-info-price {
		font-family: 'Amatic-R';
		font-size: 2rem;
		margin-right: 2rem;
		max-width: 90px;
	}
	.shoppingbag-card-info-name {
		font-family: 'Amatic-R';
		font-size: 2rem;
	}
	.shoppingbag-card-info-another {
		font-family: 'Amatic-R';
		font-size: 1.33rem;
	}
`;
