import { request } from '../../../utils/request';
import { setProductsData } from '../products-actions/set-products-data';
import { setProductsLoader } from '../loaders-actions/set-products-loader';

export const loadProducts = (category, searchText, page, method) => (dispatch) => {
	request(
		`/products?category=${category}&search=${searchText}&method=${method}&page=${page}&limit=8`,
	)
		.then(({ data: { products, lastPage } }) => {
			dispatch(setProductsData(products, lastPage));
		})
		.finally(() => dispatch(setProductsLoader(false)));
};
