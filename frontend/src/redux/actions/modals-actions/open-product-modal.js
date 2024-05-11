import { ACTION_TYPE } from '../action-type';

export const openProductModal = (payload) => ({
	type: ACTION_TYPE.OPEN_PRODUCT_MODAL,
	payload: payload,
});
