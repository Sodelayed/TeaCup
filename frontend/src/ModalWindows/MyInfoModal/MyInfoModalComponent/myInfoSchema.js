import * as yup from 'yup';

export const myInfoSchema = yup.object().shape({
	userName: yup
		.string()
		.matches(/^[А-Я]/, {
			excludeEmptyString: true,
			message: 'Логин должен начинаться с большой буквы.',
		})
		.matches(/^[а-яА-Я]+$/, {
			excludeEmptyString: true,
			message: 'Имя может содержать только буквы.',
		})
		.notRequired(),
	userSurname: yup
		.string()
		.notRequired()
		.matches(/^[А-Я]/, {
			excludeEmptyString: true,
			message: 'Логин должен начинаться с большой буквы.',
		})
		.matches(/^[а-яА-Я]+$/, {
			excludeEmptyString: true,
			message: 'Имя может содержать только буквы.',
		}),
	userPhonenumber: yup
		.string()
		.matches(
			// eslint-disable-next-line no-useless-escape
			/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/,
			{
				excludeEmptyString: true,
				message: 'Некорректный номер.',
			},
		)
		.notRequired(),
	userEmail: yup.string().email('Некорректная почта.').notRequired(),
});
