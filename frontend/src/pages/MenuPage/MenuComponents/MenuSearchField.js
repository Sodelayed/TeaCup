import React, { useMemo, useState } from 'react';
import { Grid, TextField, debounce } from '@mui/material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from '../../../redux/selectors';
import { setSearch } from '../../../redux/actions';

export const MenuSearchField = ({ shouldSearch, setShouldSearch }) => {
	const search = useSelector(selectSearch);
	const dispatch = useDispatch();
	const [searchText, setSearchText] = useState(search);

	const goSearch = useMemo(() => debounce(setShouldSearch, 500), [setShouldSearch]);

	const onSearch = (value) => {
		setSearchText(value);
		if (searchText.trim() !== '') {
			dispatch(setSearch(value.trim()));
			goSearch(!shouldSearch);
		}
	};
	return (
		<SearchFieldContainer item xs={12}>
			<TextField
				color="secondary"
				label="Поиск..."
				value={searchText}
				onChange={(e) => {
					onSearch(e.target.value);
				}}
			/>
		</SearchFieldContainer>
	);
};

const SearchFieldContainer = styled(Grid)`
	display: flex;
	justify-content: center;

	& .MuiTextField-root {
		width: 80%;
		margin: 20px 0px;
	}
	& .MuiInputBase-root {
		border-radius: 10px;
	}
`;
