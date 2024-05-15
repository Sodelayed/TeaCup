import { changeOrderState } from '../../../../redux/actions';

export const orderStateChanger = (value, order, dispatch) => {
	const splitedTime = value.split(':');
	if (Number(splitedTime[0]) === 0) {
		if (
			Number(splitedTime[1]) <= 5 &&
			Number(splitedTime[1]) !== 0 &&
			order.state !== 'start cooking'
		) {
			dispatch(changeOrderState(order.id, 'start cooking'));
		}
		if (Number(splitedTime[1]) === 0 && order.state !== 'time left') {
			dispatch(changeOrderState(order.id, 'time left'));
		}
	}
};
