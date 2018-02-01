import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Wrapper from "components/Wrapper";
import Page from "components/Page";
import Container from "components/Container";
import Event from "components/Event";

class Feed extends React.PureComponent {
	render = () => {
		return (
			<div>
				<Wrapper slider header footer>
					<Page title="Events" year="2018">
						{new Array(10)
							.fill()
							.map(e => (
								<Event
									date={Date.now()}
									title="Silvesterparty"
									type="Party"
									description="Music and Chill"
									location="Wenk Aarau"
								/>
							))}
					</Page>
				</Wrapper>
			</div>
		);
	};
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Feed);
