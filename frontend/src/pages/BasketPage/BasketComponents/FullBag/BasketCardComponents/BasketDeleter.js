import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../../../../redux/selectors';
import { removeItemFromBasket, setBasketsLoader } from '../../../../../redux/actions';
export const BasketDeleter = ({ basketId }) => {
	const dispatch = useDispatch();
	const userId = useSelector(selectUserId);
	const deleteItem = () => {
		dispatch(setBasketsLoader(true));
		dispatch(removeItemFromBasket(basketId, userId));
	};
	return (
		<Tooltip title="Удалить?" placement="top" color="primary">
			<IconButton size="large" onClick={deleteItem}>
				<DeleteIcon fontSize="2rem" />
			</IconButton>
		</Tooltip>
	);
};
