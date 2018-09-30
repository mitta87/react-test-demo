import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { deleteMessage, loadMessage } from "../../message/MessageActions";
import { DELETE_MESSAGE, SET_MESSAGE } from "../../message/MessageActionTypes";
import { fetchMessage } from "../../message/MessageFetches";

jest.mock("../../message/MessageFetches");

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("messageActions", () => {

	it("should create DELETE_MESSAGE action", async () => {
		//GIVEN
		const expected = { type: DELETE_MESSAGE };

		//WHEN
		const result = deleteMessage();

		//THEN
		expect(result).toEqual(expected);
	});

	it("should create LOAD_MESSAGE action (manually mock dispatch example)", async () => {
		//GIVEN
		const message = "Some message";
		fetchMessage.mockResolvedValueOnce(message);
		const expected = {
			type: SET_MESSAGE,
			payload: message
		};
		const dispatch = jest.fn();

		//WHEN
		await loadMessage()(dispatch);

		//THEN
		expect(dispatch).toHaveBeenNthCalledWith(1, expected);
	});

	it("should create LOAD_MESSAGE action (mockStore example)", async () => {
		//GIVEN
		const store = mockStore();
		const message = "Some message";
		fetchMessage.mockResolvedValueOnce(message);
		const expected = {
			type: SET_MESSAGE,
			payload: message
		};

		//WHEN
		await store.dispatch(loadMessage());

		//THEN
		expect(store.getActions()).toEqual([expected]);
	});

});
