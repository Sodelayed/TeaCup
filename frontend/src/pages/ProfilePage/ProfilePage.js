import React from 'react';
import { ProfileNavigation } from './ProfilePageComponents.js/ProfileNavigation';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../redux/selectors';
import { ROLE } from '../../constants/role';
import { AccessDenied } from '../../components';

export const ProfilePage = () => {
	const roleId = useSelector(selectUserRole);

	if (roleId === ROLE.GUEST) return <AccessDenied />;
	return (
		<Grid
			container
			spacing={2}
			sx={{
				marginBottom: '30px',
			}}
		>
			<ProfileNavigation />

			<Grid item xs={9}>
				<ProfileContainer>
					<Outlet />
				</ProfileContainer>
			</Grid>
		</Grid>
	);
};

const ProfileContainer = styled.div`
	margin-top: 4.5rem;
	width: 99%;
	min-height: 530px;
	background-color: rgb(251, 247, 251);
	border-radius: 15px;
`;
