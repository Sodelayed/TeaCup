import React from 'react';
import styled from 'styled-components';
import { fontSize, smallFontSize } from './fontSize';

export const UserRowData = ({ user }) => {
	const size = fontSize(user.login);
	const smallSize = smallFontSize(size);
	return (
		<UserRowDataContainer $fontSize={size + 'rem'} $smallFontSize={smallSize + 'rem'}>
			<p className="login">{user.login}</p>
			{user.name ? (
				<div>
					<p className="name">
						<span>{user.name} </span>
						<span>{user.surname}</span>
					</p>
				</div>
			) : (
				<div className="undefined-data">Имя не указано</div>
			)}
		</UserRowDataContainer>
	);
};

const UserRowDataContainer = styled.div`
	width: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: 'Amatic-B';

	& .login {
		font-size: ${(props) => props.$fontSize};
	}
	& .name {
		font-size: ${(props) => props.$smallFontSize};
		color: rgb(9, 9, 9, 0.4);
	}
	& .undefined-data {
		font-size: ${(props) => props.$smallFontSize};
		color: rgb(9, 9, 9, 0.4);
	}
`;
