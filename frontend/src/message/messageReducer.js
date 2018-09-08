import { SET_MESSAGE } from "./MessageActionTypes";

const initialState = {
	text: "abc"
};

const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MESSAGE:
			return { ...state, text: action.payload };
		default: return state;
	}
};

export default messageReducer;