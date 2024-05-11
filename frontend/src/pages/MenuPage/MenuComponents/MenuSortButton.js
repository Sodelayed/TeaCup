import React, { useState, useEffect } from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSortMethod } from '../../../redux/actions';

export const MenuSortButton = () => {
	const [method, setMethod] = useState('');
	const dispatch = useDispatch();

	const handleChange = (event) => {
		setMethod(event.target.value);
	};
	useEffect(() => {
		dispatch(setSortMethod(method));
	}, [dispatch, method]);
	return (
		<FormControl
			sx={{ minWidth: '220px', marginBottom: '1rem', marginLeft: '3.5rem' }}
		>
			<InputLabel color="secondary" id="sort-select">
				Методы сортирования
			</InputLabel>
			<Select
				value={method}
				labelId="sort-select"
				id="sort-select"
				onChange={handleChange}
				color="secondary"
				label="Методы сортирования"
			>
				<MenuItem value="">без сортирования</MenuItem>
				<MenuItem value="upper">по возрастанию цены</MenuItem>
				<MenuItem value="lower">по убыванию цены</MenuItem>
			</Select>
		</FormControl>
	);
};
