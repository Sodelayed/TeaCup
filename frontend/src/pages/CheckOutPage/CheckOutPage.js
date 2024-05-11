import React from 'react';
import styled from 'styled-components';
import { CheckOutLeftSide, CheckOutRightSide } from './CheckOutComponents';
import { useSelector } from 'react-redux';
import { selectUserBasket } from '../../redux/selectors';

import { useNavigate } from 'react-router-dom';

export const CheckOutPage = () => {
	const basket = useSelector(selectUserBasket);
	const navigate = useNavigate();
	if (basket.length === 0 || !basket) return navigate('/');
	return (
		<CheckOutContainer>
			<CheckOutLeftSide />
			<CheckOutRightSide />
		</CheckOutContainer>
	);
};

const CheckOutContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: row;
	margin: 3rem auto;
	width: 1260px;
	background-color: rgb(251, 247, 251);
	border-radius: 6px;

	.checkout-user-data,
	.checkout-user-basket {
		width: 50%;
		padding: 2rem 2rem 2rem 2rem;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 24px;
		border-radius: 6px 0px 0px 6px;
	}
	.checkout-header {
		margin-bottom: 1.25rem;
		font-size: 1.25rem;
	}
`;
