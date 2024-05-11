import { ACTION_TYPE } from '../action-type';

export const setSortMethod = (data) => ({
	type: ACTION_TYPE.SET_SORT_METHOD,
	payload: data,
});
