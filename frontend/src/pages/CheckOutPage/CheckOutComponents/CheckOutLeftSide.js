import React, { useState } from 'react';
import {
	CheckOutCommentField,
	CheckOutForm,
	CheckOutPayment,
} from './LeftSideComponents';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectUserBasket,
	selectUserId,
	selectUserLogin,
} from '../../../redux/selectors';
import { prepareOrder } from '../../../hooks/prepare-order';
import { addToOrders } from '../../../redux/actions';
import { useNavigate } from 'react-router-dom';

export const CheckOutLeftSide = () => {
	const [typeofPayment, setTypeofPayment] = useState('при получении');
	const [comment, setComment] = useState('');

	const basket = useSelector(selectUserBasket);
	const userId = useSelector(selectUserId);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const send = ({
		name,
		surname,
		phonenumber,
		email,
		time,
		location,
		price,
		count,
	}) => {
		const preparedOrder = prepareOrder(
			name,
			surname,
			phonenumber,
			email,
			time,
			location,
			typeofPayment,
			comment,
			price,
			count,
			basket,
		);

		dispatch(addToOrders(userId, preparedOrder));
		setComment('');
		navigate('/');
	};

	return (
		<div className="checkout-user-data">
			<h1 className="checkout-header">Личные данные</h1>
			<CheckOutForm send={send} basket={basket} />
			<h1 className="checkout-header">Способ оплаты</h1>
			<CheckOutPayment
				typeofPayment={typeofPayment}
				setTypeofPayment={setTypeofPayment}
			/>
			<CheckOutCommentField comment={comment} setComment={setComment} />
		</div>
	);
};
