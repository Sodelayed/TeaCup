import React from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InputAdornment from '@mui/material/InputAdornment';
export const PhoneInput = ({ label, type, error, register }) => {
	return (
		<CustomTextField
			InputProps={{
				startAdornment: <InputAdornment position="start">+7</InputAdornment>,
			}}
			id="outlined-basic"
			label={label}
			type={type}
			variant="outlined"
			error={error ? true : false}
			helperText={error}
			{...register}
		/>
	);
};
const CustomTextField = styled(TextField)`
	width: 100%;
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

PhoneInput.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	error: PropTypes.string.isRequired,
	register: PropTypes.func.isRequired,
};
