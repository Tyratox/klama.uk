import React from "react";
import { Provider } from "react-redux";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

//containers
import Events from "containers/Events";
import Blog from "containers/Blog";
import Page from "containers/Page";
import Post from "containers/Post";
import Event from "containers/Event";

const App = ({ history, store }) => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<div>
					<Route exact path="/" component={Events} />
					<Route exact path="/blog" component={Blog} />
					<Route exact path="/event/:eventSlug" component={Event} />
					<Route exact path="/page/:pageSlug" component={Page} />
					<Route exact path="/post/:postSlug" component={Post} />
				</div>
			</ConnectedRouter>
		</Provider>
	);
};

export default App;
