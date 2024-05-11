import { changeOrderState } from '../../../../redux/actions';

export const orderStateChanger = (value, order, dispatch) => {
	if (value === '00:05' && order.state !== 'start cooking') {
		dispatch(changeOrderState(order.id, 'start cooking'));
	}
	if (value === '00:00' && order.state !== 'time left') {
		dispatch(changeOrderState(order.id, 'time left'));
	}
};
