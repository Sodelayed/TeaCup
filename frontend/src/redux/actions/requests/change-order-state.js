import { request } from '../../../utils/request';
import { setOrders } from '../user-actions/set-orders';

export const changeOrderState = (orderId, state) => (dispatch) => {
	request(`/orders/${orderId}`, 'PATCH', { state: state }).then(({ data: orders }) =>
		dispatch(setOrders(orders)),
	);
};
