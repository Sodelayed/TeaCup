import React from 'react';
import { LiaBoxSolid } from 'react-icons/lia';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

export const CheckOutPayment = ({ typeofPayment, setTypeofPayment }) => {
	const handleAlignment = (event, newType) => {
		if (newType !== null) {
			setTypeofPayment(newType);
		}
	};

	return (
		<ToggleButtonGroup value={typeofPayment} exclusive onChange={handleAlignment}>
			<ToggleButton
				value="при получении"
				color="secondary"
				sx={{
					fontSize: '0.75rem',
				}}
			>
				<LiaBoxSolid size={'40px'} />
				при получении
			</ToggleButton>
		</ToggleButtonGroup>
	);
};
