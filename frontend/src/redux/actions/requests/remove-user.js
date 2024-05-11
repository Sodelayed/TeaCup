import { request } from '../../../utils/request';
import { setUsersData } from '../users-actions/set-users-data';

export const removeUser = (userId) => (dispatch) =>
	request(`/users/${userId}`, 'DELETE').then(({ data }) => {
		dispatch(setUsersData(data));
	});
