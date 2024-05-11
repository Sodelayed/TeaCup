import { ACTION_TYPE } from '../actions';

const initialLoaderState = {
	productsLoader: false,
	usersLoader: false,
	ordersLoader: false,
	basketsLoader: false,
	alert: {
		state: false,
		text: '',
	},
};

export const loadersReducer = (state = initialLoaderState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_PRODUCTS_LOADER:
			return {
				...state,
				productsLoader: action.payload,
			};
		case ACTION_TYPE.SET_USERS_LOADER:
			return {
				...state,
				usersLoader: action.payload,
			};
		case ACTION_TYPE.SET_ORDERS_LOADER:
			return {
				...state,
				ordersLoader: action.payload,
			};
		case ACTION_TYPE.SET_BASKETS_LOADER:
			return {
				...state,
				basketsLoader: action.payload,
			};
		case ACTION_TYPE.SET_ALERT:
			return {
				...state,
				alert: {
					...action.payload,
				},
			};
		default:
			return state;
	}
};
