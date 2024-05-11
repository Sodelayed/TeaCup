import { TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export const EditProductsDescriptionOrCompound = ({ label, error, register }) => {
	return (
		<TextareaContainer>
			<TextField
				id="outlined-multiline-static"
				label={label}
				multiline
				rows={7}
				sx={{ width: '80%' }}
				error={error ? true : false}
				helperText={error}
				{...register}
			/>
		</TextareaContainer>
	);
};

const TextareaContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 50%;
	height: 50%;
`;
