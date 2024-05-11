import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
	appReducer,
	productReducer,
	userReducer,
	usersReducer,
	productsReducer,
} from './reducers';
import { loadersReducer } from './reducers/loader-reducer';

const reducer = combineReducers({
	appState: appReducer,
	userState: userReducer,
	usersState: usersReducer,
	productState: productReducer,
	productsState: productsReducer,
	loadersState: loadersReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
