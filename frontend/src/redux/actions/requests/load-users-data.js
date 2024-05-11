import { request } from '../../../utils/request';
import { setUsersData } from '../users-actions/set-users-data';
import { setUsersLoader } from '../loaders-actions/set-users-loader';

export const loadUsersData = () => (dispatch) => {
	request('/users', 'GET')
		.then(({ data }) => dispatch(setUsersData(data)))
		.finally(() => dispatch(setUsersLoader(false)));
};
