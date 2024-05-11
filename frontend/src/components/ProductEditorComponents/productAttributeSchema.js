import * as yup from 'yup';

export const productAttributeSchema = yup.object().shape({
	productName: yup
		.string()
		.matches(
			/^[А-Я,-\s]+$/,
			'Название товара должно быть написано только большими буквами.',
		)
		.required('Пожалуйста, заполните это поле.'),
	productCategory: yup
		.string()
		.matches(
			/^[а-я]+$/,
			'Категория товара должна быть написана маленькими буквами на кириллице ',
		)
		.required('Пожалуйста, заполните это поле.'),
	productImg: yup.string().required('Пожалуйста, заполните это поле.'),
	productDescription: yup.string().required('Пожалуйста, заполните это поле.'),
	productCompound: yup.string().required('Пожалуйста, заполните это поле.'),
});
