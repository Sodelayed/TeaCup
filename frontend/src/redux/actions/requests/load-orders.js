import { request } from '../../../utils/request';
import { setOrders } from '../user-actions/set-orders';
import { setOrdersLoader } from '../loaders-actions/set-orders-loader';

export const loadOrders = () => (dispatch) =>
	request('/orders', 'GET')
		.then(({ data: orders }) => {
			dispatch(setOrders(orders));
		})
		.finally(() => dispatch(setOrdersLoader(false)));
