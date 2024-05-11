import React, { useState } from 'react';
import { Grid, ToggleButton, ToggleButtonGroup, Divider } from '@mui/material';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../../redux/selectors';
import { logOut } from '../../../redux/actions';
import { ROLE } from '../../../constants/role';

export const ProfileNavigation = () => {
	const location = useLocation();
	const ACTUAL_URL = location.pathname.slice(9, location.pathname.length);
	const [alignment, setAlignment] = useState(ACTUAL_URL);

	const handleAlignment = (event, newAlignment) => {
		if (newAlignment !== null) {
			setAlignment(newAlignment);
		}
	};
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const roleId = useSelector(selectUserRole);

	const ContentSlider = (e) => {
		navigate(`${e}`);
	};
	const onLogOut = () => {
		dispatch(logOut());
		sessionStorage.removeItem('userData');
		navigate('/');
	};

	return (
		<ProfileNavigationContainer item xs={3}>
			<div className="profileNav">
				<ToggleButtonGroup
					orientation="vertical"
					value={alignment}
					onChange={handleAlignment}
					exclusive
					color="secondary"
				>
					<ToggleButton
						value="info"
						onClick={(e) => ContentSlider(e.target.value)}
					>
						Мои данные
					</ToggleButton>
					<Divider orientation="horizontal" flexItem />
					{roleId === ROLE.BUYER && (
						<>
							<ToggleButton
								value="basket"
								onClick={(e) => ContentSlider(e.target.value)}
							>
								Корзина
							</ToggleButton>
							<Divider orientation="horizontal" flexItem />
						</>
					)}
					<ToggleButton
						value="orders"
						onClick={(e) => ContentSlider(e.target.value)}
					>
						История заказов
					</ToggleButton>
					<Divider orientation="horizontal" flexItem />
					{roleId === ROLE.ADMINISTRATOR && (
						<>
							<ToggleButton
								value="users"
								onClick={(e) => ContentSlider(e.target.value)}
							>
								Пользователи
							</ToggleButton>
							<Divider orientation="horizontal" flexItem />
						</>
					)}
					{roleId === ROLE.ADMINISTRATOR && (
						<>
							<ToggleButton
								value="create-product"
								onClick={(e) => ContentSlider(e.target.value)}
							>
								Добавить товар
							</ToggleButton>
							<Divider orientation="horizontal" flexItem />
						</>
					)}
					<ToggleButton value="exit" onClick={onLogOut}>
						Выйти из аккаунта
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
		</ProfileNavigationContainer>
	);
};

const ProfileNavigationContainer = styled(Grid)`
	& .profileNav {
		margin-left: 5vw;
		margin-top: 4.5rem;
	}
	& .MuiToggleButtonGroup-vertical {
		display: flex;
		flex-direction: column;
		width: auto;
	}
	& .MuiToggleButtonGroup-grouped {
		font-family: 'Amatic-B';
		color: rgb(180, 104, 179);
		font-size: 2rem;
		letter-spacing: 0.25rem;
		border: 0;
	}
`;
