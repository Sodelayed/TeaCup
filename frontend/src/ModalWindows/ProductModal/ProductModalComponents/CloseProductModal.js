import React from 'react';
import { IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

export const CloseProductModal = ({ closeProductModal }) => {
	return (
		<IconButton color="primary" onClick={closeProductModal}>
			<CancelIcon fontSize="large" />
		</IconButton>
	);
};
