import { ACTION_TYPE } from '../action-type';

export const setUsersData = (usersData) => ({
	type: ACTION_TYPE.SET_USERS_DATA,
	payload: usersData,
});
