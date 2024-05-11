import React from 'react';
import { Grid } from '@mui/material';
import { GiCoffeeMug } from 'react-icons/gi';

export const FooterLogo = () => {
	return (
		<Grid
			item
			xs={4}
			sx={{
				display: 'flex',
				justifyContent: 'center',
				color: 'rgb(251, 249, 213)',
			}}
		>
			<GiCoffeeMug size={'300px'} />
		</Grid>
	);
};
