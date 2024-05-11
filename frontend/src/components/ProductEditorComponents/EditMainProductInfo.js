import { TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export const EditMainProductInfo = ({
	errorName,
	errorCategory,
	errorImg,
	registerName,
	registerCategory,
	registerImg,
}) => {
	return (
		<EditMainInfoContainer>
			<SmallTextField
				variant="filled"
				label="Название продукта"
				error={errorName ? true : false}
				helperText={errorName}
				{...registerName}
				color="secondary"
			/>
			<SmallTextField
				variant="filled"
				label="Категория продукта"
				error={errorCategory ? true : false}
				helperText={errorCategory}
				{...registerCategory}
				color="secondary"
			/>
			<SmallTextField
				variant="filled"
				label="Изображение продукта"
				error={errorImg ? true : false}
				helperText={errorImg}
				{...registerImg}
				color="secondary"
			/>
		</EditMainInfoContainer>
	);
};

const EditMainInfoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 50%;
	height: 50%;
`;
const SmallTextField = styled(TextField)`
	width: 80%;
	margin: 1rem 0 !important;
`;
