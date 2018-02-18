import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { push } from "react-router-redux";

import { Flex, Box } from "grid-styled";

import Link from "components/Link";
import Wrapper from "components/Wrapper";
import PageWrapper from "components/Page";
import Container from "components/Container";
import BlogEntry from "components/BlogEntry";

import { fetch as fetchPage } from "actions/page";

import { getPageById } from "reducers";

class Page extends React.PureComponent {
	componentWillMount = () => {
		const { fetchPage } = this.props;

		fetchPage();
	};
	render = () => {
		const {
			slug,
			page: { title = "", content = "", date = Date.now() }
		} = this.props;

		return (
			<Wrapper slider header footer>
				<PageWrapper title={title}>
					<div dangerouslySetInnerHTML={{ __html: content }} />
				</PageWrapper>
			</Wrapper>
		);
	};
}

const mapStateToProps = (state, { match: { params: { pageSlug } } }) => ({
	slug: pageSlug,
	page: getPageById(state, pageSlug) || {}
});

const mapDispatchToProps = (dispatch, { match: { params: { pageSlug } } }) => ({
	fetchPage() {
		return dispatch(fetchPage(pageSlug));
	}
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page));
