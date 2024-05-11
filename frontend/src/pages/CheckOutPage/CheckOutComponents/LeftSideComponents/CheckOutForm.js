import { checkOutSchema } from './CheckOutSchema';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, PhoneInput } from '../../../../components/FormComponents';
import { CheckOutSubmit } from './CheckOutSubmit';
import { Grid } from '@mui/material';

import dayjs from 'dayjs';
import { CheckOutAdress } from './CheckOutAdress';
import { useSelector } from 'react-redux';
import {
	selectUserEmail,
	selectUserName,
	selectUserPhonenumber,
	selectUserSurname,
} from '../../../../redux/selectors';
import { CheckOutPickers } from './CheckOutPickers';

export const CheckOutForm = ({ send, basket }) => {
	const userName = useSelector(selectUserName);
	const userSurname = useSelector(selectUserSurname);
	const userPhonenumber = useSelector(selectUserPhonenumber);
	const userEmail = useSelector(selectUserEmail);
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: userName,
			surname: userSurname,
			phonenumber: userPhonenumber,
			email: userEmail,
			time: dayjs().add(5, 'minute'),
			location: null,
		},
		resolver: yupResolver(checkOutSchema),
	});

	let nameError = errors.name?.message;
	let surNameError = errors.surname?.message;
	let phoneNumberError = errors.phonenumber?.message;
	let emailError = errors.email?.message;
	let timeError = errors.time?.message;
	let locationError = errors.location?.message;
	let price = 0,
		count = 0;
	basket.map((el) => {
		return (price += Number(el.finalPrice)) && (count += Number(el.count));
	}, {});
	const sendForm = ({ name, surname, phonenumber, email, time, location }) => {
		send({ name, surname, phonenumber, email, time, location, price, count });
		reset();
	};

	return (
		<Grid
			component="form"
			autoComplete="off"
			onSubmit={handleSubmit(sendForm)}
			container
			spacing={3}
			sx={{ marginBottom: '1.5rem' }}
		>
			<Grid item xs={6}>
				<Input
					label="Имя *"
					type="text"
					error={nameError}
					register={register('name')}
				/>
			</Grid>
			<Grid item xs={6}>
				<Input
					label="Фамилия"
					type="text"
					error={surNameError}
					register={register('surname')}
				/>
			</Grid>
			<Grid item xs={6}>
				<PhoneInput
					label="Мобильный телефон *"
					type="number"
					error={phoneNumberError}
					register={register('phonenumber')}
				/>
			</Grid>
			<Grid item xs={6}>
				<Input
					label="Email"
					type="email"
					error={emailError}
					register={register('email')}
				/>
			</Grid>
			<Grid item xs={6}>
				<CheckOutPickers control={control} timeError={timeError} />
			</Grid>
			<Grid item xs={12}>
				<CheckOutAdress error={locationError} register={register('location')} />
			</Grid>
			<CheckOutSubmit price={price} count={count} />
		</Grid>
	);
};
