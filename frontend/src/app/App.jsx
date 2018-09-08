import { Provider } from "react-redux";
import MessageContainer from "../message/MessageContainer";
import { store } from "../store";

const App = () => <div className="App">
	<MessageContainer/>
</div>;

export default () => (
	<Provider store={store}>
		<App/>
	</Provider>
);