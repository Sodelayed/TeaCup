import { Pagination, Stack } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount, selectPage } from '../../../redux/selectors';
import { setPage } from '../../../redux/actions';

export const MenuPagination = () => {
	const count = useSelector(selectCount);
	const page = useSelector(selectPage);

	const dispatch = useDispatch();
	const handleChange = (event, value) => {
		dispatch(setPage(value));
	};
	return (
		<>
			{count !== 1 && (
				<Stack
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						margin: '2rem 0',
					}}
				>
					<Pagination
						count={count}
						page={page}
						onChange={handleChange}
						variant="outlined"
						size="large"
						color="primary"
					/>
				</Stack>
			)}
		</>
	);
};
