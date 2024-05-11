import { request } from '../../../utils/request';
import { setAlert } from '../loaders-actions/set-alert';
import { setUser } from '../user-actions/set-user';

export const changeUserInfo =
	(userId, { userName, userSurname, userPhonenumber, userEmail }) =>
	(dispatch) => {
		request(`/users/${userId}/personal`, 'PATCH', {
			name: userName,
			surname: userSurname,
			phonenumber: userPhonenumber,
			email: userEmail,
		})
			.then(({ data: user }) => {
				dispatch(setUser(user));
			})
			.finally(() =>
				dispatch(setAlert({ state: true, text: 'Данные успешно изменены' })),
			);
	};
