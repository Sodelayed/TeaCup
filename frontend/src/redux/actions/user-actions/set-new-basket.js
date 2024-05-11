import { ACTION_TYPE } from '../action-type';

export const setNewBasket = (basketData) => ({
	type: ACTION_TYPE.SET_NEW_BASKET,
	payload: basketData,
});
