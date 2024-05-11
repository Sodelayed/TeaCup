import { Divider, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectUserName,
	selectUserSurname,
	selectUserEmail,
	selectUserPhonenumber,
} from '../../redux/selectors';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { OPEN_INFO_MODAL } from '../../redux/actions';

export const MyInfoPage = () => {
	const dispatch = useDispatch();
	const name = useSelector(selectUserName);
	const surname = useSelector(selectUserSurname);
	const phonenumber = useSelector(selectUserPhonenumber);
	const email = useSelector(selectUserEmail);

	const func = () => {
		dispatch(OPEN_INFO_MODAL);
	};

	return (
		<InfoPageContainer>
			<div className="infopage-header-container">
				<h1 className="infopage-header">Моя информация</h1>
				<Tooltip title="Изменить" placement="top">
					<IconButton aria-label="delete" color="primary" onClick={func}>
						<ModeEditIcon
							sx={{
								fontSize: '2.5rem',
							}}
						/>
					</IconButton>
				</Tooltip>
			</div>
			<Divider />
			{name && (
				<div className="infopage-data-container">
					<PersonIcon
						color="primary"
						sx={{
							width: '300px',
							height: '300px',
							borderRadius: '50%',
							bgcolor: 'rgb(166,226,46,0.3)',
						}}
					/>
					<div className="infopage-data">
						<h2 className="infopage-main-data">
							{surname} {name}
						</h2>
						<div className="infopage-side-data">
							{phonenumber && (
								<div className="infopage-side-data-phonenumber">
									<h3>Номер телефона:</h3>
									<p>+7{phonenumber}</p>
								</div>
							)}
							{email && (
								<div className="infopage-side-data-email">
									<h3>Почта:</h3>
									<p>{email}</p>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</InfoPageContainer>
	);
};

const InfoPageContainer = styled.div`
	padding: 15px;
	min-height: 520px;
	.infopage-header-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.infopage-header {
		font-family: 'Amatic-B';
		font-size: 3rem;
		margin-left: 5rem;
		margin-bottom: 5px;
	}
	.infopage-data-container {
		display: flex;
		margin: auto;
		margin-top: 3rem;
		width: fit-content;
		flex-direction: row;
		align-items: center;
	}
	.infopage-data {
		height: 300px;
		min-width: 520px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.infopage-main-data {
		font-family: 'Amatic-B';
		font-size: 5rem;
		letter-spacing: 0.5rem;
		text-align: center;
	}
	.infopage-side-data {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		font-family: 'Amatic-B';
		font-size: 2.5rem;
		letter-spacing: 0.1rem;
	}
	.infopage-side-data-phonenumber > p,
	.infopage-side-data-email > p {
		font-family: 'Amatic-R';
		font-size: 2.5rem;
		letter-spacing: 0.1rem;
	}
`;
