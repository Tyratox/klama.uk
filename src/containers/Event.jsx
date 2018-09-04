import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Wrapper from "components/Wrapper";
import PageWrapper from "components/Page";

import { fetch as fetchEvent } from "actions/event";
import { fetchAll as fetchEventTypes } from "actions/event-type";
import { getEventById, getEventTypes } from "reducers";

import { colors } from "utilities/style";
import { formatIsoDate, isoToDate } from "utilities/format";

const EventWrapper = styled.div`
  padding: 1rem 0;
`;

const Table = styled.table`
  border-collapse: collapse;

  td:first-child {
    ${({ firstColumn }) => (firstColumn ? `min-width:${firstColumn}rem;` : "")};
  }

  thead th {
    padding: 0.5rem 0.5rem 0.5rem 0.25rem;
    background-color: ${colors.primaryLight};
    color: #fff;
    text-align: left;
  }

  th,
  td {
    padding: 0.25rem 0.5rem 0 0;
  }
`;

class Event extends React.PureComponent {
  componentDidMount = () => {
    const { fetchEvent, eventTypes, fetchEventTypes } = this.props;

    fetchEvent();

    if (eventTypes.length === 0) {
      fetchEventTypes();
    }
  };
  render = () => {
    const {
      slug,
      event: {
        title = "",
        content = "",
        dateFrom = "",
        dateTo = "",
        location = "",
        artists = [],
        eventTypeIds = []
      },
      eventTypes
    } = this.props;

    return (
      <Wrapper slider header footer>
        <Helmet>
          <title>Klamauk - {title}</title>
        </Helmet>
        <PageWrapper
          title={title}
          year={isoToDate(dateFrom)
            .getFullYear()
            .toString()}
        >
          <EventWrapper>
            <h2>Infos</h2>
            <Table firstColumn={2}>
              <tbody>
                <tr>
                  <td>Von</td>
                  <td>{formatIsoDate(dateFrom, false)}</td>
                </tr>
                <tr>
                  <td>Bis</td>
                  <td>{formatIsoDate(dateTo, false)}</td>
                </tr>
                <tr>
                  <td>Typ</td>
                  <td>
                    {eventTypes
                      .filter(eventType => eventTypeIds.includes(eventType.id))
                      .map(eventType => eventType.name)
                      .join(", ")}
                  </td>
                </tr>
                <tr>
                  <td>Ort</td>
                  <td>{location}</td>
                </tr>
              </tbody>
            </Table>
            {artists.length > 0 && (
              <div>
                <h2>Acts</h2>
                <Table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Von</th>
                      <th>Bis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {artists.map(({ id, name, dateFrom, dateTo }) => {
                      return (
                        <tr key={id + "-" + dateFrom}>
                          <td>{name}</td>
                          <td>{formatIsoDate(dateFrom)}</td>
                          <td>{formatIsoDate(dateTo)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            )}
            <h2>Beschreibung</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </EventWrapper>
        </PageWrapper>
      </Wrapper>
    );
  };
}

const mapStateToProps = (
  state,
  {
    match: {
      params: { eventSlug }
    }
  }
) => ({
  slug: fetchEvent,
  event: getEventById(state, eventSlug) || {},
  eventTypes: getEventTypes(state) || []
});

const mapDispatchToProps = (
  dispatch,
  {
    match: {
      params: { eventSlug }
    }
  }
) => ({
  fetchEvent() {
    return dispatch(fetchEvent(eventSlug));
  },
  fetchEventTypes() {
    return dispatch(fetchEventTypes());
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Event)
);
