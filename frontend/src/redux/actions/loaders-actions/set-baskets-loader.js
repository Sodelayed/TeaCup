import { ACTION_TYPE } from '../action-type';

export const setBasketsLoader = (data) => ({
	type: ACTION_TYPE.SET_BASKETS_LOADER,
	payload: data,
});
