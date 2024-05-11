import { ACTION_TYPE } from '../action-type';

export const setProductsLoader = (data) => ({
	type: ACTION_TYPE.SET_PRODUCTS_LOADER,
	payload: data,
});
