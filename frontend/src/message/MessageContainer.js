import { getMessageText } from "./messageSelectors";
import { connect } from "react-redux";
import Message from "./Message";
import { loadMessage } from "./MessageActions";

const mapStateToProps = state => ({
	message: getMessageText(state)
});

const mapDispatchToProps = dispatch => ({
	onLoadMessage: () => dispatch(loadMessage())
});

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;