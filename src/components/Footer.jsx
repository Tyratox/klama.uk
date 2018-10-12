import React from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";
import Container from "components/Container";
import { Flex, Box } from "grid-styled";

import { colors, media } from "utilities/style";

import InstagramIcon from "react-icons/lib/io/social-instagram-outline";
import FacebookIcon from "react-icons/lib/io/social-facebook";
import ContactIcon from "react-icons/lib/io/android-chat";

const FooterWrapper = styled.footer`
  background-color: ${colors.primaryLight};
  color: #fff;
  padding: 1rem 0;
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 0.8rem;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    margin: 0.25rem 0;
    cursor: pointer;

    a {
      text-decoration: none;
      color: #fff;
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;

const FooterTitle = styled.h4`
  ${media.maxMedium`
		border-top: #fff 1px solid;
	`};

  padding-top: 0.5rem;
  margin: 0.5rem 0 1rem 0;
`;

class Footer extends React.PureComponent {
  render = () => {
    return (
      <FooterWrapper>
        <Container>
          <Flex wrap>
            <Box width={[1, 1, 1 / 3, 1 / 3]} pr={2}>
              <FooterTitle>Social Media</FooterTitle>
              <FooterList>
                <li>
                  <a
                    href="https://www.instagram.com/klamauker/"
                    target="_blank"
                  >
                    <InstagramIcon />
                    Instagram
                  </a>
                </li>
              </FooterList>
            </Box>
            <Box width={[1, 1, 1 / 3, 1 / 3]} pr={2}>
              <FooterTitle>Kontakt</FooterTitle>
              <FooterList>
                <li
                  onClick={() => {
                    window.location =
                      "mailto:" +
                      "siul"
                        .split("")
                        .reverse()
                        .join("") +
                      "@klama.uk";
                  }}
                >
                  <ContactIcon />
                  Schreib uns!
                </li>
              </FooterList>
            </Box>
            <Box width={[1, 1, 1 / 3, 1 / 3]} pr={2}>
              <FooterTitle>Hei!</FooterTitle>
              Cool dass uf eusere website besch 😉
            </Box>
          </Flex>
          <Copyright>© {new Date().getFullYear()}</Copyright>
        </Container>
      </FooterWrapper>
    );
  };
}

export default Footer;
