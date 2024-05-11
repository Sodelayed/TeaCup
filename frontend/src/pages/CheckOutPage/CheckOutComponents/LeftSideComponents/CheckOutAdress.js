import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocations } from '../../../../redux/selectors';
import { setLocations } from '../../../../redux/actions';
import { FormControl, InputLabel, Select, MenuItem, OutlinedInput } from '@mui/material';
import styled from 'styled-components';
import { request } from '../../../../utils/request';
export const CheckOutAdress = ({ error, register }) => {
	const shopLocations = useSelector(selectLocations);
	const dispatch = useDispatch();

	useEffect(() => {
		if (shopLocations.length < 1)
			request('/locations', 'GET').then(({ data: locations }) =>
				dispatch(setLocations(locations)),
			);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<FormControl
			sx={{
				width: '566px',
			}}
		>
			<InputLabel error={error ? true : false} htmlFor="grouped-select">
				Место получения заказа
			</InputLabel>
			<Select
				autoWidth="false"
				defaultValue=""
				id="grouped-select"
				label="Grouping"
				input={<OutlinedInput label="Место получения заказа" />}
				error={error ? true : false}
				{...register}
			>
				{shopLocations.map((el, index) => {
					const text =
						el.category +
						', ' +
						el.title[0].toUpperCase() +
						el.title.substring(1, el.title.length).toLowerCase() +
						', ' +
						el.adress;
					return (
						<MenuItem value={text} key={index}>
							{text}
						</MenuItem>
					);
				})}
			</Select>
			{error ? <StyledError>{error}</StyledError> : <div></div>}
		</FormControl>
	);
};

const StyledError = styled.p`
	color: #d32f2f;
	font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
	font-weight: 400;
	font-size: 0.75rem;
	line-height: 1.66;
	letter-spacing: 0.03333em;
	text-align: left;
	margin-top: 3px;
	margin-right: 14px;
	margin-bottom: 0;
	margin-left: 14px;
`;
