import { ACTION_TYPE } from '../action-type';

export const setPage = (data) => ({
	type: ACTION_TYPE.SET_PAGE,
	payload: data,
});
