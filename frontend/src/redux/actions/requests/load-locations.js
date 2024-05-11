import { request } from '../../../utils/request';
import { setLocations } from '../app-actions/set-locations';

export const loadLocations = () => (dispatch) => {
	request('/locations', 'GET').then(({ data: locations }) =>
		dispatch(setLocations(locations)),
	);
};
