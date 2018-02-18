import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { push } from "react-router-redux";
import styled from "styled-components";

import { Flex, Box } from "grid-styled";

import Link from "components/Link";
import Wrapper from "components/Wrapper";
import PageWrapper from "components/Page";
import Container from "components/Container";
import BlogEntry from "components/BlogEntry";

import { fetch as fetchPost } from "actions/post";

import { getPostById } from "reducers";

const PostWrapper = styled.div`
	padding: 1rem 0;
`;

class Post extends React.PureComponent {
	componentWillMount = () => {
		const { fetchPost } = this.props;

		fetchPost();
	};
	render = () => {
		const {
			slug,
			post: { title = "", content = "", date = Date.now() }
		} = this.props;

		return (
			<Wrapper slider header footer>
				<PageWrapper title={title}>
					<PostWrapper>
						<div dangerouslySetInnerHTML={{ __html: content }} />
					</PostWrapper>
				</PageWrapper>
			</Wrapper>
		);
	};
}

const mapStateToProps = (state, { match: { params: { postSlug } } }) => ({
	slug: postSlug,
	post: getPostById(state, postSlug) || {}
});

const mapDispatchToProps = (dispatch, { match: { params: { postSlug } } }) => ({
	fetchPost() {
		return dispatch(fetchPost(postSlug));
	}
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
