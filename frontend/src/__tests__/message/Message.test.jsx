import { shallow } from "enzyme";
import React from "react";
import Message from "../../message/Message";

describe("Message", () => {
	it("should render message from property", () => {
		//GIVEN
		const message = "Some message";
		const wrapper = shallow(<Message message={message}/>);

		//WHEN
		const actualMessage = wrapper.find(".Message__text").text();

		//THEN
		expect(actualMessage).toEqual(message);
	});

	it("should call callback function from props on 'load message' button click", () => {
		//GIVEN
		const onLoadMessage = jest.fn();
		const wrapper = shallow(<Message onLoadMessage={onLoadMessage}/>);

		//WHEN
		wrapper.find(".Message__button--load").simulate("click");

		//THEN
		expect(onLoadMessage.mock.calls.length).toEqual(1);
	});

	it("should call callback function from props on 'delete message' button click", () => {
		//GIVEN
		const onDeleteMessage = jest.fn();
		const wrapper = shallow(<Message onDeleteMessage={onDeleteMessage}/>);

		//WHEN
		wrapper.find(".Message__button--delete").simulate("click");

		//THEN
		expect(onDeleteMessage.mock.calls.length).toEqual(1);
	});

	it("should match snapshot", () => {
		//GIVEN
		const message = "Some message";

		//WHEN
		const wrapper = shallow(<Message message={message}/>);

		//THEN
		expect(wrapper).toMatchSnapshot();
	});
});