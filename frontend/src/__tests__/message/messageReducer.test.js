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
});