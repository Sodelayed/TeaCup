import { request } from '../../../utils/request';
import { setNewBasket } from '../user-actions/set-new-basket';

export const addToBasket = (product, userId) => (dispatch) => {
	request(`/baskets/${userId}`, 'POST', {
		product: product,
		count: 1,
		finalPrice: product.price,
	}).then(({ data: basket }) => {
		dispatch(setNewBasket(basket));
	});
};
