import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { timeDifferenceMaker } from './time-difference-maker';
import { orderStateChanger } from './order-state-changer';

export const useTimer = (order) => {
	const dispatch = useDispatch();
	const [value, setValue] = useState(timeDifferenceMaker(order));

	useEffect(() => {
		if (order.state === 'time left') {
			setValue('00:00');
			return;
		}

		const timer = setInterval(() => {
			setValue(timeDifferenceMaker(order));
			orderStateChanger(timeDifferenceMaker(order), order, dispatch);
		}, 30000);

		return () => clearInterval(timer);
	}, [value, order, dispatch]);

	return value;
};
