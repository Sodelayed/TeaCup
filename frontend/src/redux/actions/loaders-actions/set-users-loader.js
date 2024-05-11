import { ACTION_TYPE } from '../action-type';

export const setUsersLoader = (data) => ({
	type: ACTION_TYPE.SET_USERS_LOADER,
	payload: data,
});
