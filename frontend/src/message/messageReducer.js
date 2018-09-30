import { DELETE_MESSAGE, SET_MESSAGE } from "./MessageActionTypes";

const initialState = {
	text: ""
};

const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MESSAGE:
			return { ...state, text: action.payload };
		case DELETE_MESSAGE:
			return { ...state, text: initialState.text };
		default: return state;
	}
};

export default messageReducer;