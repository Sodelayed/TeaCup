import React from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useDispatch, useSelector } from 'react-redux';
import {
	SWITCH_TO_EDIT_PRODUCT_MODAL,
	SWITCH_TO_INFO_PRODUCT_MODAL,
} from '../../../redux/actions';
import { selectProductModalStatus } from '../../../redux/selectors';
export const EditProductModal = () => {
	const dispatch = useDispatch();
	const status = useSelector(selectProductModalStatus);
	const switchToEdit = () => {
		dispatch(SWITCH_TO_EDIT_PRODUCT_MODAL);
	};
	const switchToInfo = () => {
		dispatch(SWITCH_TO_INFO_PRODUCT_MODAL);
	};
	return (
		<>
			{status === 'info' ? (
				<IconButton color="secondary" onClick={switchToEdit}>
					<EditIcon fontSize="large" />
				</IconButton>
			) : (
				<IconButton color="primary" onClick={switchToInfo}>
					<KeyboardBackspaceIcon fontSize="large" />
				</IconButton>
			)}
		</>
	);
};
