import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { TeaCup } from './TeaCup';
import { ThemeProvider } from '@mui/material';
import { theme } from './constants/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<TeaCup />
			</ThemeProvider>
		</BrowserRouter>
	</Provider>,
);
