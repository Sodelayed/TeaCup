import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { selectAlertState, selectAlertText } from '../redux/selectors';
import { setAlert } from '../redux/actions';

export const Alert = () => {
	const dispatch = useDispatch();
	const alertIsOpen = useSelector(selectAlertState);
	const alertText = useSelector(selectAlertText);
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		dispatch(setAlert({ state: false, text: '' }));
	};
	console.log(alertIsOpen);
	return (
		<Snackbar
			open={alertIsOpen}
			autoHideDuration={3000}
			onClose={handleClose}
			message={alertText}
		/>
	);
};
