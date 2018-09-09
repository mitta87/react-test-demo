import React from "react";
import "./Message.less";

const Message = (props) =>
	<div className="Message">
		<div className="Message__text">{props.message}</div>
		<div className="Message__buttonsPanel">
			<button className="Message__button" onClick={props.onLoadMessage}>Load message</button>
		</div>
	</div>;

export default Message;
