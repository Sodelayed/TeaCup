import { IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';
export const ObjectMapper = ({
	array,
	onChange,
	adornment,
	removeTextFields,
	needButton,
}) => {
	return (
		<MapperContainer>
			{array.map((el, index) => {
				return (
					<div>
						<TextField
							value={el.includes('мл') ? el.replace('мл', '') : el}
							type="number"
							onChange={($event) => onChange($event, index)}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										{adornment}
									</InputAdornment>
								),
							}}
							key={index}
							margin="dense"
						/>
						{needButton ? (
							<IconButton
								color="error"
								onClick={() => removeTextFields(index)}
							>
								<DeleteIcon fontSize="large" />
							</IconButton>
						) : (
							<div></div>
						)}
					</div>
				);
			})}
		</MapperContainer>
	);
};
const MapperContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;

	& div {
		display: flex;
		flex-direction: row;
	}
	& input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;
