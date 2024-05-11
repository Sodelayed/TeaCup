import { ROLE } from '../../constants/role';
import { ACTION_TYPE } from '../actions';

const initialUserState = {
	name: '',
	surname: '',
	phonenumber: '',
	email: '',
	session: null,
	id: null,
	login: null,
	roleId: ROLE.GUEST,
	basket: [],
	order: [],
};

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER: {
			return {
				...state,
				...action.payload,
			};
		}
		case ACTION_TYPE.LOGOUT:
			return initialUserState;
		case ACTION_TYPE.SET_NEW_BASKET:
			return {
				...state,
				basket: action.payload,
			};
		case ACTION_TYPE.SET_ORDERS:
			return {
				...state,
				order: action.payload,
			};
		default:
			return state;
	}
};
