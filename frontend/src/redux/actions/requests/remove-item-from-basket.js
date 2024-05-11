import { request } from '../../../utils/request';
import { setBasketsLoader } from '../loaders-actions/set-baskets-loader';
import { setNewBasket } from '../user-actions/set-new-basket';

export const removeItemFromBasket = (basketId, userId) => (dispatch) =>
	request(`/baskets/${userId}/${basketId}`, 'DELETE')
		.then(({ data: newBasketsData }) => {
			if (!newBasketsData) newBasketsData = [];
			dispatch(setNewBasket(newBasketsData));
		})
		.finally(() => dispatch(setBasketsLoader(false)));
