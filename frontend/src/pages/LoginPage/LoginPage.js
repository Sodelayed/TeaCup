import React from 'react';
import { LoginForm } from './LoginComponents/LoginForm';
import styled from 'styled-components';


export const LoginPage = () => {
	
	return (
		<LoginContainer>
			<h1 className="login header">Войти в аккаунт</h1>
			<LoginForm />
		</LoginContainer>
	);
};

const LoginContainer = styled.div`
	margin: 10rem auto;
	padding: 15px 50px;
	box-sizing: border-box;
	width: 500px;
	-webkit-border-radius: 15px;
	border-radius: 15px;
	background: rgb(245, 245, 245);
	-webkit-box-shadow:
		5px 5px 8px #b4b4b5,
		-5px -5px 8px #ffffff;
	box-shadow:
		5px 5px 8px #b4b4b5,
		-5px -5px 8px #ffffff;

	& .login.header {
		font-family: 'Amatic-B';
		letter-spacing: 0.09em;
		text-align: center;
		font-size: 3rem;
		color: rgb(38,160,3);
	}
`;
