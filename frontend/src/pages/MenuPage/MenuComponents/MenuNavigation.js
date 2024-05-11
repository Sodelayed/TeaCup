import React, { useState } from 'react';
import { Grid, ToggleButton, ToggleButtonGroup, Divider } from '@mui/material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setPage } from '../../../redux/actions';
import { selectCategory } from '../../../redux/selectors';

export const MenuNavigation = () => {
	const category = useSelector(selectCategory);
	const [selectedCategory, setSelectedCategory] = useState(category);
	const dispatch = useDispatch();

	const categoryChanger = (event, newCategory) => {
		dispatch(setPage(1));
		if (newCategory === null) newCategory = '';

		setSelectedCategory(newCategory);
		dispatch(setCategory(newCategory));
	};
	return (
		<MenuNavigationContainer item xs={3}>
			<div className="menuNav">
				<ToggleButtonGroup
					orientation="vertical"
					value={selectedCategory}
					onChange={categoryChanger}
					exclusive
					color="secondary"
				>
					<ToggleButton value="чай" aria-label="list">
						ЧАЙ
					</ToggleButton>
					<Divider orientation="horizontal" flexItem />
					<ToggleButton value="кофе" aria-label="module">
						КОФЕ
					</ToggleButton>
					<Divider orientation="horizontal" flexItem />
					<ToggleButton value="другие напитки" aria-label="quilt">
						ДРУГИЕ НАПИТКИ
					</ToggleButton>
					<Divider orientation="horizontal" flexItem />
					<ToggleButton value="десерты" aria-label="quilt">
						ДЕСЕРТЫ
					</ToggleButton>
					<Divider orientation="horizontal" flexItem />
					<ToggleButton value="выпечка" aria-label="quilt">
						ВЫПЕЧКА
					</ToggleButton>
					<Divider orientation="horizontal" flexItem />
					<ToggleButton value="готовая еда" aria-label="quilt">
						ГОТОВАЯ ЕДА
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
		</MenuNavigationContainer>
	);
};

const MenuNavigationContainer = styled(Grid)`
	& .menuNav {
		padding-left: 5vw;
		padding-top: 4.5rem;
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
