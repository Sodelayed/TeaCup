import { ACTION_TYPE } from '../actions';

const inititalProductsState = {
	products: [],
};

export const productsReducer = (state = inititalProductsState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_PRODUCTS_DATA:
			return {
				products: action.payload.products,
			};
		default:
			return state;
	}
};
