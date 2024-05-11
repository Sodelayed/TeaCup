import { ACTION_TYPE } from '../action-type';

export const setAlert = (data) => ({
	type: ACTION_TYPE.SET_ALERT,
	payload: data,
});
