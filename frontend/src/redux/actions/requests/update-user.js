import { request } from '../../../utils/request';
import { setAlert } from '../loaders-actions/set-alert';
import { setUsersData } from '../users-actions/set-users-data';

export const updateUser = (userId, newRoleId) => (dispatch) =>
	request(`/users/${userId}`, 'PATCH', { roleId: newRoleId })
		.then(({ data }) => {
			dispatch(setUsersData(data));
		})
		.finally(() =>
			dispatch(setAlert({ state: true, text: 'Роль пользователя обновленна' })),
		);
