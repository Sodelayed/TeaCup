import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCategory,
	selectPage,
	selectProductsLoader,
	selectSearch,
	selectSortMethod,
} from '../../redux/selectors';
import { Grid } from '@mui/material';
import {
	MenuSearchField,
	MenuNavigation,
	MenuSortButton,
	MenuProducts,
	MenuTitle,
} from './MenuComponents';
import { loadProducts, setProductsLoader } from '../../redux/actions';
import { MenuPagination } from './MenuComponents/MenuPagination';
import { Loader } from '../../components';

export const MenuPage = () => {
	const dispatch = useDispatch();

	const [shouldSearch, setShouldSearch] = useState(false);

	const page = useSelector(selectPage);
	const category = useSelector(selectCategory);
	const search = useSelector(selectSearch);
	const method = useSelector(selectSortMethod);
	const productsLoader = useSelector(selectProductsLoader);

	useEffect(() => {
		dispatch(setProductsLoader(true));
		dispatch(loadProducts(category, search, page, method));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, category, shouldSearch, page, method]);

	return (
		<MenuContainer>
			<MenuTitle />
			<div className="menuMain">
				<Grid container spacing={2}>
					<MenuSearchField
						shouldSearch={shouldSearch}
						setShouldSearch={setShouldSearch}
					/>
					<MenuNavigation />
					<Grid item xs={9}>
						<MenuSortButton />
						{productsLoader ? (
							<Loader color="primary" height="964px" />
						) : (
							<>
								<MenuProducts />
								<MenuPagination />
							</>
						)}
					</Grid>
				</Grid>
			</div>
		</MenuContainer>
	);
};

const MenuContainer = styled.div`
	width: 100%;

	& .menuMain {
		width: 100%;
		background-color: rgb(251, 247, 251);
	}
`;
