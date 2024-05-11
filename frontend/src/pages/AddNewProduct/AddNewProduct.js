import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SendIcon from '@mui/icons-material/Send';
import {
	EditMainProductInfo,
	EditVariantsOfProductsVolume,
	EditProductsDescriptionOrCompound,
	productAttributeSchema,
} from '../../components/ProductEditorComponents';
import { Box, Button, Divider } from '@mui/material';

import { createNewProduct } from '../../redux/actions';
import { selectUserRole } from '../../redux/selectors';
import { ROLE } from '../../constants/role';
import { AccessDenied } from '../../components/AccessDenied';

export const AddNewProduct = () => {
	const roleId = useSelector(selectUserRole);
	if (roleId !== ROLE.ADMINISTRATOR) return <AccessDenied />;
	else return <AccessedPage />;
};
const AccessedPage = () => {
	const dispatch = useDispatch();

	const [keys, setKeys] = useState([]);
	const [values, setValues] = useState([]);

	const [priceError, setPriceError] = useState('');
	const addProduct = ({
		productName,
		productCategory,
		productImg,
		productDescription,
		productCompound,
	}) => {
		const price = {};
		keys.forEach((el, index) => {
			if (el.trim() !== '' && values[index].trim() !== '')
				price[el.trim()] = values[index].trim();
		});
		const newProduct = {
			name: productName,
			category: productCategory,
			img: productImg,
			price: price,
			description: productDescription,
			compound: productCompound,
		};

		if (keys.length > 0 && values.length > 0 && keys.length === values.length) {
			dispatch(createNewProduct(newProduct));
			setPriceError('');
			setKeys([]);
			setValues([]);
			reset();
		} else {
			setPriceError('Проверь и дозаполни поля с объемом и ценами товара');
		}
	};

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			productName: '',
			productCategory: '',
			productImg: '',
			productDescription: '',
			productCompound: '',
		},
		resolver: yupResolver(productAttributeSchema),
	});

	let productNameError = errors.productName?.message;
	let productCategoryError = errors.productCategory?.message;
	let productImgError = errors.productImg?.message;
	let productDescriptionError = errors.productDescription?.message;
	let productCompoundError = errors.productCompound?.message;

	return (
		<AddNewProductContainer
			component="form"
			autoComplete="off"
			onSubmit={handleSubmit(addProduct)}
		>
			<h1 className="add-product-header">Добавить продукт</h1>
			<Divider sx={{ width: 'calc(100% - 30px)', margin: '0 auto' }} />

			<EditMainProductInfo
				errorName={productNameError}
				errorCategory={productCategoryError}
				errorImg={productImgError}
				registerName={register('productName')}
				registerCategory={register('productCategory')}
				registerImg={register('productImg')}
			/>

			<EditVariantsOfProductsVolume
				keys={keys}
				values={values}
				setKeys={setKeys}
				setValues={setValues}
			/>

			<EditProductsDescriptionOrCompound
				label={'Описание товара'}
				error={productDescriptionError}
				register={register('productDescription')}
			/>
			<EditProductsDescriptionOrCompound
				label={'Состав товара'}
				error={productCompoundError}
				register={register('productCompound')}
			/>
			<div className="button-container">
				<Button
					variant="contained"
					size="large"
					type="submit"
					color="secondary"
					sx={{ margin: 'auto' }}
					endIcon={<SendIcon />}
				>
					Сохранить
				</Button>
				{priceError && <p className="form-price-error">{priceError}</p>}
			</div>
		</AddNewProductContainer>
	);
};
const AddNewProductContainer = styled(Box)`
	width: 100%;

	position: relative;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	& .add-product-header {
		width: 100%;
		font-family: 'Amatic-B';
		font-size: 3rem;
		margin-left: 5rem;
		margin-bottom: 5px;
		margin-top: 15px;
	}
	& .button-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 1rem auto;
	}
	& .form-price-error {
		display: block;
		margin: auto;
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
	}
`;
