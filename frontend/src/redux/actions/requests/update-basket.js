import { request } from '../../../utils/request';
import { setBasketsLoader } from '../loaders-actions/set-baskets-loader';
import { setNewBasket } from '../user-actions/set-new-basket';

export const updateBasket =
	(newCount, startingPrice, basketId, userId, setCurrentCount) => (dispatch) => {
		request(`/baskets/${userId}/${basketId}`, 'PATCH', {
			count: newCount,
			startingPrice: startingPrice,
		})
			.then(({ data: newBasketsData }) => {
				dispatch(setNewBasket(newBasketsData));
				setCurrentCount(newCount);
			})
			.finally(() => dispatch(setBasketsLoader(false)));
	};
