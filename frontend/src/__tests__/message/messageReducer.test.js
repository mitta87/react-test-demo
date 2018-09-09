import messageReducer from "../../message/messageReducer";
import { SET_MESSAGE } from "../../message/MessageActionTypes";

describe("messageReducer", () => {
	it("should set message from the action to state", () => {
		//GIVEN
		const state = {};
		const text = "Some text";
		const action = {
			type: SET_MESSAGE,
			payload: text
		};
		const expected = {
			text
		};

		//WHEN
		const result = messageReducer(state, action);

		//THEN
		expect(result).toEqual(expected);
	});

	it("should return initial state if handling not related action", () => {
		//GIVEN
		const action = {
			type: "some type"
		};
		const state = {
			text: ""
		};

		//WHEN
		const result = messageReducer(state, action);

		//THEN
		expect(result).toEqual(state);
	});

	it("should return initial state if state arg is not defined", () => {
		//GIVEN
		const initialState = {
			text: ""
		};
		const action = {
			type: "some type"
		};

		//WHEN
		const result = messageReducer(undefined, action);

		//THEN
		expect(result).toEqual(initialState);
	});
});