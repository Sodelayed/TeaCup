import { ACTION_TYPE } from '../action-type';

export const setOrdersLoader = (data) => ({
	type: ACTION_TYPE.SET_ORDERS_LOADER,
	payload: data,
});
