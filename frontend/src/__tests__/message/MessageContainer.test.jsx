import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Message from "../../message/Message";
import { deleteMessage, loadMessage } from "../../message/MessageActions";
import MessageContainer, { mapDispatchToProps, mapStateToProps } from "../../message/MessageContainer";
import { getMessageText } from "../../message/messageSelectors";

jest.mock("../../message/MessageActions");
jest.mock("../../message/messageSelectors");


describe("MessageContainer", () => {
	//Approach 1: Test only mapDispatchToProps and mapStateToProps
	it("should map dispatch to onLoadMessage action", () => {
		//GIVEN
		const dispatch = jest.fn();
		const action = { type: "Load message" };
		loadMessage.mockReturnValueOnce(action);

		//WHEN
		mapDispatchToProps(dispatch).onLoadMessage();

		//THEN
		expect(dispatch).toHaveBeenNthCalledWith(1, action);
	});

	it("should map dispatch to onDeleteMessage action", () => {
		//GIVEN
		const dispatch = jest.fn();
		const action = { type: "Delete message" };
		deleteMessage.mockReturnValueOnce(action);

		//WHEN
		mapDispatchToProps(dispatch).onDeleteMessage();

		//THEN
		expect(dispatch).toHaveBeenNthCalledWith(1, action);
	});

	it("should map message from state to prop(1)", () => {
		//GIVEN
		const state = {};
		const message = "Some message";
		getMessageText.mockImplementationOnce(stateArg => stateArg === state ? message : undefined);

		//WHEN
		const result = mapStateToProps(state).message;

		//THEN
		expect(result).toEqual(message);
	});

	//Approach 2: mount connected component with enzyme and mockStore
	it("should map dispatch to onLoadMessage action (2)", () => {
		//GIVEN
		const store =  configureMockStore()();
		const action = { type: "Load message" };
		loadMessage.mockReturnValueOnce(action);

		//WHEN
		const wrapper = mount(<Provider store={store}><MessageContainer/></Provider>);
		// const wrapper = shallow(<MessageContainer store={store}/>);
		wrapper.find(Message).props().onLoadMessage();

		//THEN
		expect(store.getActions()).toEqual([action]);
	});

	it("should map dispatch to onDeleteMessage action(2)", () => {
		//GIVEN
		const store =  configureMockStore()();
		const action = { type: "Delete message" };
		deleteMessage.mockReturnValueOnce(action);

		//WHEN
		const wrapper = mount(<Provider store={store}><MessageContainer/></Provider>);
		wrapper.find(Message).props().onDeleteMessage();

		//THEN
		expect(store.getActions()).toEqual([action]);
	});

	it("should map message from state to prop (2)", () => {
		//GIVEN
		const store =  configureMockStore()();
		const message = "Some message";
		getMessageText.mockImplementationOnce(stateArg => stateArg === store.getState() ? message : undefined);

		//WHEN
		const wrapper = mount(<Provider store={store}><MessageContainer/></Provider>);

		//THEN
		expect(wrapper.find(Message).props().message).toEqual(message);
	});
});