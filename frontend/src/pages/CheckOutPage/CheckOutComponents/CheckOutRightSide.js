import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserBasket } from '../../../redux/selectors';

import styled from 'styled-components';
import { Divider } from '@mui/material';

export const CheckOutRightSide = () => {
	const basket = useSelector(selectUserBasket);
	return (
		<div className="checkout-user-basket">
			<h1 className="checkout-header">Состав заказа</h1>
			{basket.map((el, index) => {
				return (
					<div key={index}>
						<ElementContainer>
							<div>
								<p className="element-name">{el.product.name}</p>
								<p className="element-volume">
									Объем: {el.product.volume}
								</p>
							</div>
							<div>
								<p className="element-price">{el.finalPrice} руб.</p>
								<p className="element-count">{el.count} шт.</p>
							</div>
						</ElementContainer>
						{index < basket.length - 1 && (
							<Divider
								orientation="horizontal"
								sx={{
									margin: '1rem 0',
								}}
							/>
						)}
					</div>
				);
			})}
		</div>
	);
};

const ElementContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	& p {
		margin-bottom: 0.5rem;
	}
	& .element-name,
	.element-price {
		font-size: 0.9rem;
		letter-spacing: 0.03rem;
	}
	& .element-volume,
	.element-count {
		font-size: 0.8rem;
		letter-spacing: 0.03rem;
		color: rgb(0, 0, 0, 0.67);
	}
	.element-count {
		text-align: right;
	}
`;
