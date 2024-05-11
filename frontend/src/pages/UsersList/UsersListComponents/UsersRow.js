import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

import { UserRowContacts, UserRowData, UserRowDate, UserRowRole } from './RowComponents';

export const UsersRow = ({ user, roles, onUserRemove }) => {
	return (
		<UserRowContainer>
			<UserRowData user={user} />
			<UserRowContacts user={user} />
			<UserRowDate user={user} />
			<UserRowRole user={user} roles={roles} onUserRemove={onUserRemove} />
		</UserRowContainer>
	);
};

const UserRowContainer = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: center;

	font-family: 'Amatic-R';
`;

UsersRow.propTypes = {
	login: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	registeredAt: PropTypes.string.isRequired,
	roleId: PropTypes.string.isRequired,
	roles: PropTypes.array.isRequired,
};
