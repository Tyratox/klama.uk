import React from "react";
import { connect } from "react-redux";

import Wrapper from "components/Wrapper";
import Container from "components/Container";

class Feed extends React.PureComponent {
	render = () => {
		return (
			<div>
				<Wrapper slider header footer>
					<Container>wu</Container>
				</Wrapper>
			</div>
		);
	};
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Feed);
