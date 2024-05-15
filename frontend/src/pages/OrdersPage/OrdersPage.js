/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectUserRole, selectOrder, selectOrdersLoader } from '../../redux/selectors';
import styled from 'styled-components';
import { Divider } from '@mui/material';
import { AdminOrdersBlock, ClientOrdersBlock } from './OrdersPageComponents';
import { ROLE } from '../../constants/role';
import { useDispatch } from 'react-redux';

import { loadOrders, setOrdersLoader } from '../../redux/actions';
import { Loader } from '../../components/Loader';
import { EmptyContainerBlock } from '../../components';

export const OrdersPage = () => {
	const roleId = useSelector(selectUserRole);
	const orders = useSelector(selectOrder);
	const dispatch = useDispatch();
	const ordersLoader = useSelector(selectOrdersLoader);
	useEffect(() => {
		if (roleId === ROLE.ADMINISTRATOR || roleId === ROLE.MODERATOR) {
			dispatch(setOrdersLoader(true));
			dispatch(loadOrders());
		}
	}, [dispatch]);

	return (
		<OrdersContainer>
			<h1 className="orders-header">История заказов</h1>
			<Divider />
			{ordersLoader ? (
				<Loader color="secondary" height="600px" />
			) : orders.length >= 1 ? (
				<>
					{orders.reverse().map((el, index) => {
						return roleId === ROLE.BUYER ? (
							<ClientOrdersBlock order={el} key={index} />
						) : (
							<AdminOrdersBlock order={el} key={index + 1} />
						);
					})}
				</>
			) : (
				<EmptyContainerBlock text={'История заказов пуста'} />
			)}
		</OrdersContainer>
	);
};

const OrdersContainer = styled.div`
	min-height: 520px;
	padding: 15px;
	.orders-header {
		font-family: 'Amatic-B';
		font-size: 3rem;
		margin-left: 5rem;
		margin-bottom: 5px;
	}
`;
