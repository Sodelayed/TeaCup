import dayjs from 'dayjs';
import localeObject from '../constants/localeDayjs';
export const prepareOrder = (
	name,
	surname,
	phonenumber,
	email,
	time,
	location,
	typeofPayment,
	comment,
	price,
	count,
	basket,
) => {
	const items = basket.map((el) => {
		return {
			name: el.product.name,
			volume: el.product.volume,
			count: el.count,
			price: el.finalPrice,
			img: el.product.img,
			id: el.product.id,
		};
	});
	const basketsId = basket.map((el) => {
		return el.id;
	});
	const preparedOrder = {
		client: name + ' ' + surname,
		phonenumber: '+7' + phonenumber,
		email: email,
		selectedTime: dayjs(time).locale(localeObject).format('HH:mm'),
		adress: location,
		state: 'in process',
		typeofPayment: typeofPayment,
		comment: comment,
		basketPrice: price,
		basketCount: count,
		items: items,
		basketsId: basketsId,
	};
	return preparedOrder;
};
