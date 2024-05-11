import { Button } from '@mui/material';
import React from 'react';

import styled from 'styled-components';
import { ObjectMapper } from './ObjectMapper';

export const EditVariantsOfProductsVolume = ({ keys, values, setKeys, setValues }) => {
	const addPrice = () => {
		const newKeys = keys;
		newKeys.push('');
		const newValues = values;
		newValues.push('');
		setKeys(
			newKeys.map((el) => {
				return el;
			}),
		);
		setValues(
			newValues.map((el) => {
				return el;
			}),
		);
	};

	const onChangeKeys = ($event, index) => {
		setKeys(
			keys.map((elem, id) => {
				if (id === index) {
					elem = $event.target.value + 'мл';
				}
				return elem;
			}),
		);
	};

	const onChangeValues = ($event, index) => {
		setValues(
			values.map((elem, id) => {
				if (id === index) {
					elem = $event.target.value;
				}
				return elem;
			}),
		);
	};

	const removeTextFields = (index) => {
		setKeys(
			keys.filter((elem, id) => {
				return id !== index;
			}),
		);
		setValues(
			values.filter((elem, id) => {
				return id !== index;
			}),
		);
	};
	return (
		<VariantsOfVolumeContainer>
			<h1 className="variants-header">Стоимость и объем</h1>
			<Button
				variant="contained"
				color="secondary"
				onClick={addPrice}
				sx={{
					display: 'block',
					margin: '1rem auto',
				}}
			>
				Добавить
			</Button>

			<div className="variats-main-block">
				<ObjectMapper
					array={keys}
					onChange={onChangeKeys}
					adornment={'мл'}
					removeTextFields={removeTextFields}
					needButton={false}
				/>
				<ObjectMapper
					array={values}
					onChange={onChangeValues}
					adornment={'₽'}
					removeTextFields={removeTextFields}
					needButton={true}
				/>
			</div>
		</VariantsOfVolumeContainer>
	);
};

const VariantsOfVolumeContainer = styled.div`
	width: 50%;
	height: 50%;
	overflow: auto;
	& .variants-header {
		font-family: 'Amatic-B';
		font-size: 3rem;
		text-align: center;
	}
	& .variats-main-block {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
	}
`;
