import { getMessageText } from "../../message/messageSelectors";

describe("messageSelectors", () => {
	it("should select message text", () => {
		//GIVEN
		const text = "some text";
		const state = {
			message: {
				text
			}
		};

		//WHEN
		const result = getMessageText(state);

		//THEN
		expect(result).toEqual(text);
	});
});