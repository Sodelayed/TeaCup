import React from 'react';
import styled from 'styled-components';

export const UserRowContacts = ({ user }) => {
	return (
		<UserRowContactsContainer>
			{user.phonenumber ? (
				<p className="actual-data-phone">{'+7' + user.phonenumber}</p>
			) : (
				<p className="undefined-data">Номер не указан</p>
			)}
			{user.email ? (
				<p className="actual-data-email">{user.email}</p>
			) : (
				<p className="undefined-data">Почта не указана</p>
			)}
		</UserRowContactsContainer>
	);
};

const UserRowContactsContainer = styled.div`
	width: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	font-family: 'Amatic-B';
	border-left: 0.8px solid black;
	& .undefined-data {
		color: rgb(9, 9, 9, 0.4);
	}
`;
