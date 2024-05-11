import React from 'react';
import styled from 'styled-components';
import { RegisterForm } from './RegisterComponents/RegisterForm';

export const RegisterPage = () => {
	return (
		<RegisterContainer>
			<h1 className="register header">Зарегистрироваться</h1>
			<RegisterForm />
		</RegisterContainer>
	);
};

const RegisterContainer = styled.div`
	margin: 6rem auto;
	padding: 15px 50px;
	box-sizing: border-box;
	width: 500px;
	border-radius: 15px;
	-webkit-border-radius: 15px;
	background: rgb(245, 245, 245);
	-webkit-box-shadow:
		5px 5px 8px #b4b4b5,
		-5px -5px 8px #ffffff;
	box-shadow:
		5px 5px 8px #b4b4b5,
		-5px -5px 8px #ffffff;

	& .register.header {
		font-family: 'Amatic-B';
		letter-spacing: 0.09em;
		text-align: center;
		font-size: 3rem;
		color: rgb(204, 167, 202);
	}
`;
