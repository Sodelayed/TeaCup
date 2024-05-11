import React from 'react';
import localeObject from '../../../../constants/localeDayjs';
import dayjs from 'dayjs';
import styled from 'styled-components';

export const UserRowDate = ({ user }) => {
	return (
		<UserRowDateContainer>
			{dayjs(user.registeredAt).locale(localeObject).format('DD MMM YYYY')}
		</UserRowDateContainer>
	);
};

const UserRowDateContainer = styled.div`
	font-family: 'Amatic-B';
	font-size: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 200px;
	border-left: 0.8px solid black;
`;
