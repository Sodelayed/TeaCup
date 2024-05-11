import { ACTION_TYPE } from '../action-type';

export const setProductsData = (products, lastPage) => ({
	type: ACTION_TYPE.SET_PRODUCTS_DATA,
	payload: {
		products,
		lastPage,
	},
});
