import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import {
	EditMainProductInfo,
	EditVariantsOfProductsVolume,
	EditProductsDescriptionOrCompound,
	productAttributeSchema,
} from '../../components/ProductEditorComponents';
import { Box, Button, CircularProgress } from '@mui/material';
import { updateProduct } from '../../redux/actions';
import {
	selectCategory,
	selectPage,
	selectProduct,
	selectSearch,
	selectSortMethod,
} from '../../redux/selectors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const ProductModalEdit = () => {
	const product = useSelector(selectProduct);
	const category = useSelector(selectCategory);
	const page = useSelector(selectPage);
	const search = useSelector(selectSearch);
	const sortMethod = useSelector(selectSortMethod);
	const [keys, setKeys] = useState(Object.keys(product.price) || []);
	const [values, setValues] = useState(Object.values(product.price) || []);
	const [priceError, setPriceError] = useState('');
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			productName: product.name || '',
			productCategory: product.category || '',
			productImg: product.img || '',
			productDescription: product.description || '',
			productCompound: product.compound || '',
		},
		resolver: yupResolver(productAttributeSchema),
	});

	let productNameError = errors.productName?.message;
	let productCategoryError = errors.productCategory?.message;
	let productImgError = errors.productImg?.message;
	let productDescriptionError = errors.productDescription?.message;
	let productCompoundError = errors.productCompound?.message;

	const changeProduct = ({
		productName,
		productCategory,
		productImg,
		productDescription,
		productCompound,
	}) => {
		const newPrices = {};
		keys.forEach((el, index) => {
			if (el.trim() !== '' && values[index].trim() !== '')
				newPrices[el.trim()] = values[index].trim();
		});
		const newProduct = {
			name: productName,
			category: productCategory,
			img: productImg,
			price: newPrices,
			description: productDescription,
			compound: productCompound,
		};
		if (keys.length > 0 && values.length > 0 && keys.length === values.length) {
			setPriceError('');
			dispatch(
				updateProduct(product.id, newProduct, category, search, page, sortMethod),
			);
			reset();
		} else {
			setPriceError('Проверь и дозаполни поля с объемом и ценами товара.');
		}
	};
	return (
		<ProductModalEditContainer
			component="form"
			autoComplete="off"
			onSubmit={handleSubmit(changeProduct)}
		>
			{product ? (
				<>
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
					<div className="test">
						<Button
							variant="contained"
							size="large"
							type="submit"
							color="secondary"
							endIcon={<SendIcon />}
						>
							Сохранить
						</Button>
						{priceError ? (
							<p className="form-price-error">{priceError}</p>
						) : (
							<div></div>
						)}
					</div>
				</>
			) : (
				<CircularProgress color="success" />
			)}
		</ProductModalEditContainer>
	);
};

const ProductModalEditContainer = styled(Box)`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;

	& .test {
		position: absolute;
		top: calc(100% - 44.25px);
		left: calc(50% - (164.99px / 2));
	}
	& .form-price-error {
		display: inline;
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
