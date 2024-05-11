import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, PhoneInput } from '../../../components/FormComponents';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectUserEmail,
	selectUserId,
	selectUserName,
	selectUserPhonenumber,
	selectUserSurname,
} from '../../../redux/selectors';
import styled from 'styled-components';
import { myInfoSchema } from './myInfoSchema';
import { Grid, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { changeUserInfo } from '../../../redux/actions';

export const MyInfoForm = ({ closeInfoModal }) => {
	const name = useSelector(selectUserName);
	const surname = useSelector(selectUserSurname);
	const phonenumber = useSelector(selectUserPhonenumber);
	const email = useSelector(selectUserEmail);
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			userName: name,
			userSurname: surname,
			userPhonenumber: phonenumber,
			userEmail: email,
		},
		resolver: yupResolver(myInfoSchema),
	});

	let nameError = errors.userName?.message;
	let surNameError = errors.userSurname?.message;
	let phoneNumberError = errors.userPhonenumber?.message;
	let emailError = errors.userEmail?.message;

	const sendForm = ({ userName, userSurname, userPhonenumber, userEmail }) => {
		closeInfoModal();
		dispatch(
			changeUserInfo(userId, {
				userName,
				userSurname,
				userPhonenumber,
				userEmail,
			}),
		);

		reset();
	};

	return (
		<MyInfoFormContainer
			container
			spacing={3}
			component="form"
			autoComplete="off"
			onSubmit={handleSubmit(sendForm)}
		>
			<Grid item xs={10}>
				<Input
					label="Имя"
					type="text"
					error={nameError}
					register={register('userName')}
				/>
			</Grid>
			<Grid item xs={10}>
				<Input
					label="Фамилия"
					type="text"
					error={surNameError}
					register={register('userSurname')}
				/>
			</Grid>
			<Grid item xs={10}>
				<PhoneInput
					label="Мобильный телефон"
					type="number"
					error={phoneNumberError}
					register={register('userPhonenumber')}
				/>
			</Grid>
			<Grid item xs={10}>
				<Input
					label="Почта"
					type="email"
					error={emailError}
					register={register('userEmail')}
				/>
			</Grid>
			<Grid item xs={10}>
				<StyledButton
					variant="contained"
					type="submit"
					color="secondary"
					endIcon={<SendIcon />}
				>
					Изменить
				</StyledButton>
			</Grid>
		</MyInfoFormContainer>
	);
};

const MyInfoFormContainer = styled(Grid)`
	justify-content: center;
	margin: 0;
	margin-top: 10px !important;
	margin-bottom: 10px !important;
`;

const StyledButton = styled(Button)`
	width: 100%;
`;
