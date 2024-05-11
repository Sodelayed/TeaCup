import React from 'react';
import { IconButton } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCategory,
	selectPage,
	selectProduct,
	selectSearch,
	selectSortMethod,
} from '../../../redux/selectors';
import {
	CLOSE_DELETE_MODAL,
	openDeleteModal,
	removeProduct,
} from '../../../redux/actions';

export const DeleteProductModal = () => {
	const product = useSelector(selectProduct);
	const page = useSelector(selectPage);
	const category = useSelector(selectCategory);
	const search = useSelector(selectSearch);
	const method = useSelector(selectSortMethod);

	const dispatch = useDispatch();

	const onProductRemove = () => {
		dispatch(
			openDeleteModal({
				text: 'Удалить товар?',
				onConfirm: () => {
					dispatch(removeProduct(product.id, category, search, page, method));
				},
				onCancel: () => dispatch(CLOSE_DELETE_MODAL),
			}),
		);
	};

	return (
		<IconButton color="secondary" onClick={onProductRemove}>
			<DeleteIcon color="error" fontSize="large" />
		</IconButton>
	);
};
