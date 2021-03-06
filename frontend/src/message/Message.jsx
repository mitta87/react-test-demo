import React from "react";
import "./Message.less";

const Message = (props) =>
	<div className="Message">
		<div className="Message__text">{props.message}</div>
		<div className="Message__buttonsPanel">
			<button className="Message__button Message__button--load" onClick={props.onLoadMessage}>Load message</button>
			<button className="Message__button Message__button--delete" onClick={props.onDeleteMessage}>Delete message</button>
		</div>
	</div>;

export default Message;
