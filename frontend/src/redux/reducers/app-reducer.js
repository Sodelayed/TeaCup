import { ACTION_TYPE } from '../actions/action-type';

const initialAppState = {
	wasLogout: false,
	productModalOpen: {
		isOpen: false,
		status: 'info',
	},
	infoModalOpen: false,
	deleteModalOpen: {
		isOpen: false,
		text: '',
		onConfirm: () => {},
		onCancel: () => {},
	},
	category: '',
	sortMethod: 'popular',
	search: '',
	page: 1,
	count: 1,
	locations: [],
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGOUT:
			return {
				...state,
				wasLogout: !state.wasLogout,
			};
		case ACTION_TYPE.OPEN_PRODUCT_MODAL:
			return {
				...state,
				productModalOpen: {
					...state.productModalOpen,
					isOpen: true,
				},
			};
		case ACTION_TYPE.SET_LOCATIONS:
			return {
				...state,
				locations: action.payload,
			};
		case ACTION_TYPE.SWITCH_TO_EDIT:
			return {
				...state,
				productModalOpen: {
					...state.productModalOpen,
					status: 'edit',
				},
			};
		case ACTION_TYPE.SET_PRODUCT_DATA:
			return {
				...state,
				productModalOpen: {
					...state.productModalOpen,
					status: 'info',
				},
			};
		case ACTION_TYPE.SWITCH_TO_INFO:
			return {
				...state,
				productModalOpen: {
					...state.productModalOpen,
					status: 'info',
				},
			};
		case ACTION_TYPE.CLOSE_PRODUCT_MODAL:
			return {
				...state,
				productModalOpen: {
					isOpen: false,
					status: 'info',
				},
			};
		case ACTION_TYPE.OPEN_INFO_MODAL:
			return {
				...state,
				infoModalOpen: true,
			};
		case ACTION_TYPE.CLOSE_INFO_MODAL:
			return {
				...state,
				infoModalOpen: false,
			};
		case ACTION_TYPE.OPEN_DELETE_MODAL:
			return {
				...state,
				deleteModalOpen: {
					...action.payload,
					isOpen: true,
				},
			};
		case ACTION_TYPE.CLOSE_DELETE_MODAL:
			return {
				...state,
				deleteModalOpen: {
					...initialAppState.deleteModalOpen,
				},
			};
		case ACTION_TYPE.SET_CATEGORY:
			return {
				...state,
				category: action.payload,
			};
		case ACTION_TYPE.SET_SORT_METHOD:
			return {
				...state,
				sortMethod: action.payload,
			};
		case ACTION_TYPE.SET_SEARCH:
			return {
				...state,
				search: action.payload,
			};
		case ACTION_TYPE.SET_PAGE:
			return {
				...state,
				page: action.payload,
			};
		case ACTION_TYPE.SET_PRODUCTS_DATA:
			return {
				...state,
				count: action.payload.lastPage,
			};
		default:
			return state;
	}
};
