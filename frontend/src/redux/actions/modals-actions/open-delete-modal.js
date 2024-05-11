import { ACTION_TYPE } from '../action-type';

export const openDeleteModal = (modalParams) => ({
	type: ACTION_TYPE.OPEN_DELETE_MODAL,
	payload: modalParams,
});
