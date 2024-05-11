import dayjs from 'dayjs';

export const timeDifferenceMaker = (order) => {
	const splitedTime = order.selectedTime.split(':');

	const selectedDayjs = dayjs()
		.set('hour', splitedTime[0])
		.set('minute', splitedTime[1])
		.set('second', 0);

	const todayDayjs = dayjs().set('second', 0);

	const difference = selectedDayjs - todayDayjs;
	if (difference < 0) return '00:00';
	const result = dayjs(difference).subtract(3, 'hour').format('HH:mm');

	return result;
};
