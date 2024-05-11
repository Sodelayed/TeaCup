import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { UsersRow } from './UsersListComponents/UsersRow';
import { useDispatch, useSelector } from 'react-redux';
import {
	loadUsersData,
	openDeleteModal,
	removeUser,
	CLOSE_DELETE_MODAL,
	setUsersLoader,
} from '../../redux/actions';
import {
	selectUsers,
	selectRoles,
	selectUserRole,
	selectUsersLoader,
} from '../../redux/selectors';
import { ROLE } from '../../constants/role';
import { Divider } from '@mui/material';
import { TableHeader } from './UsersListComponents/RowComponents';
import { Loader } from '../../components';
import { AccessDenied } from '../../components/AccessDenied';

export const UsersList = () => {
	const roleId = useSelector(selectUserRole);
	if (roleId !== ROLE.ADMINISTRATOR) return <AccessDenied />;
	else return <UsersPageContainer />;
};

const UsersPageContainer = () => {
	const usersLoader = useSelector(selectUsersLoader);

	const [updateUserList, setUpdateUserList] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setUsersLoader(true));
		dispatch(loadUsersData());
	}, [dispatch, updateUserList]);

	const users = useSelector(selectUsers);
	const roles = useSelector(selectRoles);

	const onUserRemove = (userId) => {
		dispatch(
			openDeleteModal({
				text: 'Удалить пользователя?',
				onConfirm: () => {
					dispatch(removeUser(userId));
					dispatch(CLOSE_DELETE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_DELETE_MODAL),
			}),
		);
		setUpdateUserList(!updateUserList);
	};

	return (
		<UsersContainer>
			<h1 className="usersList-header">Пользователи</h1>
			<Divider />
			{usersLoader ? (
				<Loader color="secondary" height="600px" />
			) : (
				<>
					<TableHeader />
					<Divider />
					{users.map((el) => {
						return (
							<>
								<UsersRow
									user={el}
									roles={roles.filter(({ name }) => name !== 'Гость')}
									onUserRemove={() => onUserRemove(el.id)}
								/>
								<Divider />
							</>
						);
					})}
				</>
			)}
		</UsersContainer>
	);
};
const UsersContainer = styled.div`
	min-height: 520px;
	padding: 15px;
	& .usersList-header {
		font-family: 'Amatic-B';
		font-size: 3rem;
		margin-left: 5rem;
		margin-bottom: 5px;
	}
`;
