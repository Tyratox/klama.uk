import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { push } from "react-router-redux";

import Wrapper from "components/Wrapper";
import Page from "components/Page";
import Link from "components/Link";
import Container from "components/Container";
import { Flex, Box } from "grid-styled";

import { colors } from "utilities/style";

const EventWrapper = styled.div`
  padding: 1rem;
  color: ${colors.primary};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${colors.backgroundContrast};
    background-color: ${colors.primaryLight};

    h2 {
      color: #fff;
    }
  }

  h2 {
    margin: 1rem 0 0 0;
    font-size: 3.5rem;

    hyphens: auto;
    line-height: 1;
  }

  p {
    margin-top: 0.35rem;
  }
`;

const DateComponent = styled.div`
  font-size: 2.5rem;
`;

const DAYS = ["SO", "MO", "DI", "MI", "DO", "FR", "SA"];

class Event extends React.PureComponent {
  render = () => {
    const {
      title,
      slug,
      type,
      description,
      location,
      date,
      dispatch
    } = this.props;

    return (
      <EventWrapper
        onClick={() => {
          dispatch(push("/event/" + slug));
        }}
      >
        <Container>
          <Flex wrap>
            <Box width={[1, 1, 1 / 6, 1 / 6]} pr={2}>
              {DAYS[date.getDay()]}
              <DateComponent>
                {date
                  .getDate()
                  .toString()
                  .padStart(2, "0")}
                .{(date.getMonth() + 1).toString().padStart(2, "0")}.
              </DateComponent>
              {date
                .getHours()
                .toString()
                .padStart(2, "0")}
              :
              {date
                .getMinutes()
                .toString()
                .padStart(2, "0")}
            </Box>
            <Box width={[1, 1, 3 / 6, 3 / 6]} pr={2}>
              <h2>{title}</h2>
              <p>
                {type} – {description}
              </p>
            </Box>
            <Box width={[1, 1, 2 / 6, 2 / 6]} pr={2}>
              {location}
            </Box>
          </Flex>
        </Container>
      </EventWrapper>
    );
  };
}

Event.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired
};

export default connect()(Event);
