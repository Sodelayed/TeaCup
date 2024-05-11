import { request } from '../../../utils/request';
import { loadProducts } from './load-products';
import { setAlert } from '../loaders-actions/set-alert';
import { setProductData } from '../product-actions/set-product-data';
import { setProductsLoader } from '../loaders-actions/set-products-loader';

export const updateProduct =
	(productId, newData, category, search, page, sortMethod) => (dispatch) =>
		request(`/products/${productId}`, 'PATCH', {
			name: newData.name,
			price: newData.price,
			category: newData.category,
			img: newData.img,
			description: newData.description,
			compound: newData.compound,
		})
			.then(({ data: product }) => {
				dispatch(setProductData(product));
			})
			.then(() => {
				dispatch(setProductsLoader(true));
				dispatch(loadProducts(category, search, page, sortMethod));
			})
			.finally(() => dispatch(setAlert({ state: true, text: 'Продукт обновлен' })));
