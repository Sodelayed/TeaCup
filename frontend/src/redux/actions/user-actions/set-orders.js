import { ACTION_TYPE } from '../action-type';

export const setOrders = (ordersData) => ({
	type: ACTION_TYPE.SET_ORDERS,
	payload: ordersData,
});
