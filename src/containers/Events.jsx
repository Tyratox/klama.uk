import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Wrapper from "components/Wrapper";
import Page from "components/Page";
import Container from "components/Container";
import Event from "components/EventEntry";

import { fetchLatest } from "actions/event";
import { fetchAll as fetchAllEventTypes } from "actions/event-type";
import { getEvents, getEventTypes } from "reducers";

import { isoToDate } from "utilities/format";

class Feed extends React.PureComponent {
	componentWillMount = () => {
		const { fetchLatest, fetchAllEventTypes } = this.props;

		fetchAllEventTypes();
		fetchLatest();
	};

	render = () => {
		const { events, eventTypes } = this.props;

		return (
			<div>
				<Wrapper slider header footer>
					<Page title="Events" year={new Date().getFullYear().toString()}>
						{events.map(
							({
								id,
								title,
								slug,
								description,
								dateFrom,
								location,
								eventTypeIds = []
							}) => (
								<Event
									key={id}
									date={isoToDate(dateFrom)}
									title={title}
									slug={slug}
									type={eventTypes
										.filter(eventType => eventTypeIds.includes(eventType.id))
										.map(eventType => eventType.name)
										.join(", ")}
									description={description}
									location={location}
								/>
							)
						)}
					</Page>
				</Wrapper>
			</div>
		);
	};
}

const mapStateToProps = state => ({
	events: getEvents(state),
	eventTypes: getEventTypes(state)
});
const mapDispatchToProps = dispatch => ({
	fetchLatest() {
		return dispatch(fetchLatest());
	},
	fetchAllEventTypes() {
		return dispatch(fetchAllEventTypes());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
