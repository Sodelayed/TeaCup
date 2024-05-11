import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

export const CheckOutSubmit = ({ price, count }) => {
	return (
		<SubmitContainer>
			<div className="submit-data-title">
				<p className="submit-title-price">Итого</p>
				<p className="submit-title-count">Общее количество</p>
			</div>
			<div className="submit-data">
				<p className="submit-price">{price} руб.</p>
				<p className="submit-count">{count} шт.</p>
			</div>
			<div className="submit-button">
				<SubmitButton type="submit" variant="contained">
					Заказать
				</SubmitButton>
			</div>
		</SubmitContainer>
	);
};
const SubmitContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0 2rem;
	width: calc(630px - 4rem);
	height: 100px;
	position: absolute;
	left: 50%;
	top: calc(100% - 100px);
	background-color: rgb(200, 197, 200, 0.1);
	& .submit-data-title {
		width: 50%;
	}
	& .submit-data {
		width: 20%;
	}
	& .submit-button {
		width: 30%;
		text-align: right;
	}
	& .submit-title-price {
		font-size: 2rem;

		margin-bottom: 0.5rem;
		letter-spacing: 0.05rem;
	}
	& .submit-price {
		font-size: 2rem;
		color: rgb(180, 104, 179);
		margin-bottom: 0.5rem;
		text-align: right;
	}
	& .submit-title-count {
		font-size: 1rem;
		color: rgb(0, 0, 0, 0.67);
	}
	& .submit-count {
		color: rgb(180, 104, 179, 0.5);
		text-align: right;
	}
`;

const SubmitButton = styled(Button)`
	width: calc(100% - 2rem);
	height: calc(100px - 3rem);
`;
