import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import Wrapper from "components/Wrapper";
import Page from "components/Page";
import Container from "components/Container";
import BlogEntry from "components/BlogEntry";

import { fetchLatest } from "actions/post";
import { getPosts } from "reducers";

class Feed extends React.PureComponent {
  componentWillMount = () => {
    const { fetchLatest } = this.props;
    fetchLatest();
  };
  render = () => {
    const { posts } = this.props;

    return (
      <Wrapper slider header footer>
        <Helmet>
          <title>Klamauk - Blog</title>
          <meta
            name="description"
            content="Auf dem Klamauk Blog werden in unregelmässigen Abständen Updates gepostet."
          />
        </Helmet>
        <Page title="Blog" year={new Date().getFullYear().toString()}>
          {posts.map(({ id, title, slug, excerpt, date, thumbnailId }) => (
            <BlogEntry
              key={id}
              date={date}
              title={title}
              slug={slug}
              content={excerpt}
              thumbnailId={thumbnailId}
            />
          ))}
        </Page>
      </Wrapper>
    );
  };
}

const mapStateToProps = state => ({ posts: getPosts(state) });
const mapDispatchToProps = dispatch => ({
  fetchLatest() {
    return dispatch(fetchLatest());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
