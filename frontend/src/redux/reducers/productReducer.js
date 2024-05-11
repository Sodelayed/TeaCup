import { ACTION_TYPE } from '../actions';

const initialProductState = {
	id: 1,
	description: '',
	compound: '',
	price: {},
	name: '',
	img: '',
};

export const productReducer = (state = initialProductState, action) => {
	switch (action.type) {
		case ACTION_TYPE.OPEN_PRODUCT_MODAL:
			return {
				...action.payload,
			};
		case ACTION_TYPE.SET_PRODUCT_DATA:
			return {
				...action.payload,
			};
		case ACTION_TYPE.CLOSE_PRODUCT_MODAL:
			return initialProductState;

		default:
			return state;
	}
};
