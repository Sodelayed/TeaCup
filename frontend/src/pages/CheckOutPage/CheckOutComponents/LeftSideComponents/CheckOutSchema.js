import * as yup from 'yup';
import dayjs from 'dayjs';

yup.addMethod(yup.date, 'CompareDate', function (message) {
	return this.test('compare-date', message, function (value) {
		if (!value) {
			return false;
		}
		if (value < dayjs().add(3, 'minute')) {
			return false;
		}

		return true;
	});
});

export const checkOutSchema = yup.object().shape({
	name: yup
		.string()
		.required('Пожалуйста, заполните это поле.')
		.matches(/^[А-Я]/, 'Логин должен начинаться с большой буквы.')
		.matches(/^[а-яА-Я]+$/, 'Имя может содержать только буквы.'),
	surname: yup
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
	phonenumber: yup
		.string()
		.required('Пожалуйста, заполните это поле.')
		.matches(
			// eslint-disable-next-line no-useless-escape
			/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
			'Некорректный номер.',
		),
	email: yup.string().email('Некорректная почта.').notRequired(),
	time: yup
		.date('Невалидная дата')
		.typeError('Невалидная дата')
		.required('Пожалуйста, заполните это поле')
		.min(dayjs().hour(8).minute(0), 'В это время мы еще закрыты')
		.max(dayjs().hour(22).minute(0), 'В это время мы уже закрыты')
		.CompareDate('На приготовление нам нужно хотя бы пару минут'),
	location: yup.string().required('Пожалуйста, заполните это поле.'),
});
