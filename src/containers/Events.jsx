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

class Feed extends React.PureComponent {
  componentDidMount = () => {
    const { fetchLatest, fetchAllEventTypes, events, eventTypes } = this.props;

    if (eventTypes.length === 0) {
      fetchAllEventTypes();
    }
    if (events.length === 0) {
      fetchLatest();
    }
  };

  mapEvent = (
    { id, title, slug, description, dateFrom, location, eventTypeIds = [] },
    eventTypes
  ) => (
    <Event
      key={id}
      date={dateFrom}
      title={title}
      slug={slug}
      type={eventTypes
        .filter(eventType => eventTypeIds.includes(eventType.id))
        .map(eventType => eventType.name)
        .join(", ")}
      description={description}
      location={location}
    />
  );

  render = () => {
    const { events, eventTypes } = this.props;

    const upcoming = [];
    const past = [];
    const now = new Date();

    events.forEach(event => {
      if (event.dateTo > now) {
        upcoming.push(event);
      } else {
        past.push(event);
      }
    });

    //ascending
    upcoming.sort((a, b) => a.dateFrom.getTime() - b.dateFrom.getTime());
    //descending
    past.sort((a, b) => a.dateFrom.getTime() - b.dateFrom.getTime());

    return (
      <div>
        <Wrapper slider header footer>
          <Page title="Events" year={new Date().getFullYear().toString()} full>
            {upcoming.map(e => this.mapEvent(e, eventTypes))}
            <Container>
              <hr />
              <h2>Vergangene</h2>
            </Container>
            {past.map(e => this.mapEvent(e, eventTypes))}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
