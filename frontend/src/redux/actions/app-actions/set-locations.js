import { ACTION_TYPE } from '../action-type';

export const setLocations = (locationsData) => ({
	type: ACTION_TYPE.SET_LOCATIONS,
	payload: locationsData,
});
