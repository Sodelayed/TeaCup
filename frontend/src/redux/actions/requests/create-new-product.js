import { request } from '../../../utils/request';
import { setAlert } from '../loaders-actions/set-alert';

export const createNewProduct = (product) => (dispatch) => {
	request('/products', 'POST', {
		name: product.name,
		price: product.price,
		category: product.category,
		img: product.img,
		description: product.description,
		compound: product.compound,
	}).finally(() => dispatch(setAlert({ state: true, text: 'Продукт добавлен' })));
};
