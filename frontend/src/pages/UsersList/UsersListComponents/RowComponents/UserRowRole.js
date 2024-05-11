import {
	FormControl,
	IconButton,
	InputLabel,
	MenuItem,
	Select,
	Tooltip,
} from '@mui/material';
import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { MdOutlineSaveAlt } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateUser } from '../../../../redux/actions';

export const UserRowRole = ({ user, roles, onUserRemove }) => {
	const [selectedRoleId, setSelectedRoleId] = useState(user.roleId);
	const [initialRoleId, setInitialRoleId] = useState(user.roleId);
	const saveIsDisabled = selectedRoleId === initialRoleId;

	const dispatch = useDispatch();
	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};

	const onRoleSave = (userId, newRoleId) => {
		setInitialRoleId(newRoleId);
		dispatch(updateUser(userId, newRoleId));
	};

	return (
		<UserRowRoleContainer>
			<FormControl sx={{ minWidth: '150px' }}>
				<InputLabel
					id="change-role"
					sx={{ fontFamily: 'Amatic-B', fontSize: '1.5rem' }}
				>
					Роль
				</InputLabel>
				<Select
					labelId="change-role"
					value={selectedRoleId}
					label="Роль"
					onChange={onRoleChange}
					defaultValue={selectedRoleId}
					sx={{ fontFamily: 'Amatic-B', fontSize: '1.5rem' }}
				>
					{roles.map(({ id: roleId, name: roleName }) => (
						<MenuItem value={roleId} key={roleId}>
							{roleName}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<Tooltip title="Cохранить изменение." placement="top" arrow>
				<CustomIconButton disabled={saveIsDisabled}>
					<StyledSaveButton
						size="28px"
						disabled={saveIsDisabled}
						onClick={() => onRoleSave(user.id, selectedRoleId)}
					/>
				</CustomIconButton>
			</Tooltip>
			<Tooltip title="Удалить пользователя?" placement="top" arrow>
				<CustomIconButton>
					<StyledTrashButton size="28px" onClick={onUserRemove} />
				</CustomIconButton>
			</Tooltip>
		</UserRowRoleContainer>
	);
};

const UserRowRoleContainer = styled.div`
	display: flex;
	width: 250px;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	border-left: 0.8px solid black;
`;
const CustomIconButton = styled(IconButton)`
	padding: 2px !important;
`;
const StyledSaveButton = styled(MdOutlineSaveAlt)`
	cursor: pointer;
	color: ${({ disabled }) => (disabled ? '#ccc' : 'rgb(9,9,9)')};
	&:hover {
		color: rgb(60 172 5);
	}
`;
const StyledTrashButton = styled(BsTrash)`
	color: rgb(9, 9, 9);
	transition: 1.2s ease;
	&:hover {
		color: red;
		transition: 0.2s ease;
	}
`;
