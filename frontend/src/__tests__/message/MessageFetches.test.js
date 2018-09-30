const fetchMock = require('fetch-mock');
import { fetchMessage } from "../../message/MessageFetches";
import { MESSAGE_API_URL } from "../../message/MessageUrls";

describe("messageFetches", () => {
	beforeEach(() => {
		fetchMock.reset();
	});

	it("should fetch message text (async/await example)", async () => {
		//GIVEN
		const message = "Some message";
		fetchMock.once(MESSAGE_API_URL, message);

		//WHEN
		const result = await fetchMessage();

		//THEN
		expect(result).toEqual(message);
	});

	it("should fetch message text (Promise then example)", () => {
		//GIVEN
		const message = "Some message";
		fetchMock.once(MESSAGE_API_URL, message);

		//WHEN - THEN
		return fetchMessage().then(result => expect(result).toEqual(message));
	});

	it("should fetch message text (resolves example)", () => {
		//GIVEN
		const message = "Some message";
		fetchMock.once(MESSAGE_API_URL, message);

		//WHEN - THEN
		return expect(fetchMessage()).resolves.toEqual(message);
	});
});
