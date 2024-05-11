import { request } from '../../../utils/request';
import { CLOSE_DELETE_MODAL } from '../modals-actions/close-delete-modal';
import { CLOSE_PRODUCT_MODAL } from '../modals-actions/close-product-modal';
import { loadProducts } from './load-products';
import { setAlert } from '../loaders-actions/set-alert';

export const removeProduct =
	(productId, category, searchText, page, method) => (dispatch) =>
		request(`/products/${productId}`, 'DELETE')
			.then(() => dispatch(CLOSE_DELETE_MODAL))
			.then(() => dispatch(loadProducts(category, searchText, page, method)))
			.finally(() => {
				dispatch(CLOSE_PRODUCT_MODAL);
				dispatch(setAlert({ state: true, text: 'Продукт удален' }));
			});
