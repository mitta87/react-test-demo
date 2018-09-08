import { MESSAGE_API_URL } from "./MessageUrls";

export const fetchMessage = () => fetch(MESSAGE_API_URL, {
	headers: {
		"Content-Type": "application/json"
	},
	method: "GET"
}).then(response => response.text());