import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export const Loader = ({ height, color }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: `${height}`,
			}}
			fullWidth
		>
			<CircularProgress size="5rem" color={color} />
		</Box>
	);
};
