import { DELETE_MESSAGE, SET_MESSAGE } from "./MessageActionTypes";
import { fetchMessage } from "./MessageFetches";

export const loadMessage = () => {
	return (dispatch) => fetchMessage().then(message => dispatch({
		type: SET_MESSAGE,
		payload: message
	}));
};

export const deleteMessage = () => ({
	type: DELETE_MESSAGE
});