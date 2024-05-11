import { request } from '../../../utils/request';
import { setAlert } from '../loaders-actions/set-alert';
import { setNewBasket } from '../user-actions/set-new-basket';
import { setOrders } from '../user-actions/set-orders';

export const addToOrders = (userId, preparedOrder) => (dispatch) =>
	request(`/orders/${userId}`, 'POST', {
		client: preparedOrder.client,
		phonenumber: preparedOrder.phonenumber,
		email: preparedOrder.email,
		selectedTime: preparedOrder.selectedTime,
		adress: preparedOrder.adress,
		state: preparedOrder.state,
		typeofPayment: preparedOrder.typeofPayment,
		comment: preparedOrder.comment,
		basketPrice: preparedOrder.basketPrice,
		basketCount: preparedOrder.basketCount,
		items: preparedOrder.items,
		basketsId: preparedOrder.basketsId,
	})
		.then(({ data: orders }) => {
			dispatch(setOrders(orders.reverse()));
		})
		.then(() => {
			dispatch(setNewBasket([]));
		})
		.finally(() => dispatch(setAlert({ state: true, text: 'Заказ оформлен' })));
