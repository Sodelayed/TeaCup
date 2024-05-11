import React from 'react';
import styled from 'styled-components';

export const TableHeader = () => {
	return (
		<TableHeaderContainer>
			<div className="user">Пользователь</div>
			<div className="contacts">Контакты</div>
			<div className="date">Дата регистрации</div>
			<div className="role">Роль пользователя</div>
		</TableHeaderContainer>
	);
};

const TableHeaderContainer = styled.div`
	font-size: 2rem;
	font-family: 'Amatic-B';
	display: flex;
	flex-direction: row;
	text-align: center;
	justify-content: center;
	background-color: rgb(229, 226, 229, 0.3);
	margin-top: 0.5rem;
	& .user {
		width: 300px;
	}
	& .contacts {
		border-left: 0.8px solid black;
		width: 300px;
	}
	& .date {
		border-left: 0.8px solid black;
		width: 200px;
	}
	& .role {
		border-left: 0.8px solid black;
		width: 250px;
	}
`;
