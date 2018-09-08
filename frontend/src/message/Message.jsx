const Message = (props) =>
	<div className="Message">
		<div className="Message__text">{props.message}</div>
		<div className="Message__buttons">
			<button onClick={props.onLoadMessage}>Load message</button>
		</div>
	</div>;

export default Message;
