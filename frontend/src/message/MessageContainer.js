import { getMessageText } from "./messageSelectors";
import { connect } from "react-redux";
import Message from "./Message";
import { deleteMessage, loadMessage } from "./MessageActions";

const mapStateToProps = state => ({
	message: getMessageText(state)
});

const mapDispatchToProps = dispatch => ({
	onLoadMessage: () => dispatch(loadMessage()),
	onDeleteMessage: () => dispatch(deleteMessage())
});

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;