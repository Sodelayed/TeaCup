import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { useDispatch, useSelector } from 'react-redux';
import { setBasketsLoader, updateBasket } from '../../../../../redux/actions';
import { selectUserId } from '../../../../../redux/selectors';

export const BasketCounter = ({ count, element, basketId }) => {
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();

	const [currentCount, setCurrentCount] = useState(count);

	const countChanger = (operation, value) => {
		let newCount;
		if (operation === 'increase') {
			newCount = count + 1;
		}
		if (operation === 'decrease') {
			newCount = count - 1;
		}
		if (operation === 'handChanger') {
			newCount = Number(value);
		}
		if (newCount < 1 || newCount > 5) return;

		dispatch(setBasketsLoader(true));
		dispatch(
			updateBasket(newCount, element.price, basketId, userId, setCurrentCount),
		);
	};
	return (
		<CounterContainer>
			<CountButton
				type="contained"
				onClick={() => countChanger('decrease')}
				disabled={count === 1 ? true : false}
			>
				<RemoveIcon />
			</CountButton>
			<input
				type="number"
				step="1"
				min="1"
				value={currentCount}
				onChange={(e) => countChanger('handChanger', e.target.value)}
			/>
			<CountButton
				type="contained"
				onClick={() => countChanger('increase')}
				disabled={count === 5 ? true : false}
			>
				<AddIcon />
			</CountButton>
		</CounterContainer>
	);
};
const CounterContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 20%;

	input {
		width: 2rem;
		height: inherit;
		text-align: center;
		border-radius: 5px;
		border: 1px solid #b468b3;
		background-color: rgb(251, 247, 251);
	}

	input:focus-visible {
		border: 2px solid #b468b3;
		outline: none;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		appearance: textfield;
	}
`;
const CountButton = styled(Button)`
	min-width: 1rem !important;
	padding: 1px !important;
`;
