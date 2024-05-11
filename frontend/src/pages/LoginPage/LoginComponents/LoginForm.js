import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { ROLE } from '../../../constants/role';
import { setUser } from '../../../redux/actions';
import { selectUserRole } from '../../../redux/selectors';
import {
	Input,
	NavigateButton,
	CompleteButton,
} from '../../../components/FormComponents';
import { Box } from '@mui/material';
import { loginSchema } from './loginSchema';
import styled from 'styled-components';
import { request } from '../../../utils/request';

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(loginSchema),
	});

	let loginError = errors.login?.message;
	let passwordError = errors.password?.message;
	const [serverError, setServerError] = useState(null);
	const roleId = useSelector(selectUserRole);
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const store = useStore();

	useEffect(() => {
		let curWasLogout = store.getState().appState.wasLogout;
		return store.subscribe(() => {
			let prevWasLogout = curWasLogout;
			curWasLogout = store.getState().appState.wasLogout;

			if (curWasLogout !== prevWasLogout) {
				reset();
			}
		});
	}, [reset, store]);

	const sendFormData = ({ login, password }) => {
		request('/login', 'POST', { login, password }).then(({ error, user }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispatch(setUser(user));
			sessionStorage.setItem('userData', JSON.stringify(user));
		});
	};

	if (roleId === ROLE.BUYER) {
		navigate('/profile/basket');
	}
	if (roleId !== ROLE.BUYER && roleId !== ROLE.GUEST) {
		navigate('/profile/orders');
	}
	return (
		<CustomForm
			component="form"
			autoComplete="off"
			onSubmit={handleSubmit(sendFormData)}
		>
			<Input
				label="Login"
				type="text"
				error={loginError}
				register={register('login', {
					onChange: () => setServerError(null),
				})}
			/>
			<Input
				label="Password"
				type="password"
				error={passwordError}
				register={register('password', {
					onChange: () => setServerError(null),
				})}
			/>
			<CustomButtonContainer>
				<NavigateButton text="Зарегистрироваться" path="/register" />
				<CompleteButton error1={loginError} error2={passwordError} text="Войти" />
			</CustomButtonContainer>
			{serverError && <div className="login error">{serverError}</div>}
		</CustomForm>
	);
};
const CustomForm = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	.css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
		margin: 10px;
	}
	& .login.error {
		color: red;
		font-family: 'Playfair Nedium';
		letter-spacing: 0.05em;
	}
`;
const CustomButtonContainer = styled(Box)`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 32px 0;
	.css-9y1egq-MuiButtonBase-root-MuiButton-root,
	.css-mkazzp-MuiButtonBase-root-MuiButton-root {
		font-size: 14px;
	}
`;
