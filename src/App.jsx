import React from "react";
import { Provider } from "react-redux";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

//containers
import Feed from "containers/Feed";

const App = ({ history, store }) => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<div>
					<Route exact path="/" component={Feed} />
				</div>
			</ConnectedRouter>
		</Provider>
	);
};

export default App;
