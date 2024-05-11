export const colorFromState = (order) => {
	if (order.state === 'ready') return 'rgb(38,160,3, 0.4)';
	if (order.state === 'start cooking') return 'rgb(255,211, 26, 0.4)';
	if (order.state === 'time left') return 'rgb(254,24,0, 0.4)';
	else return 'rgb(186, 104, 180, 0.2)';
};
