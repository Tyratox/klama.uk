import React from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

//containers
import Events from "containers/Events";
import Blog from "containers/Blog";
import Page from "containers/Page";
import Post from "containers/Post";
import Event from "containers/Event";
import ScrollToTop from "./components/ScrollToTop";

const App = ({ history, store }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTop>
          <Route exact path="/" component={Events} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/event/:eventSlug" component={Event} />
          <Route exact path="/page/:pageSlug" component={Page} />
          <Route exact path="/post/:postSlug" component={Post} />
        </ScrollToTop>
      </ConnectedRouter>
    </Provider>
  );
};

export default hot(module)(App);
