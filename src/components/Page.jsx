import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Flex, Box } from "grid-styled";
import Container from "components/Container";

import { colors } from "utilities/style";

const PageWrapper = styled.div``;

const Content = styled.div`
	max-width: 50%;
`;

const PageHeader = styled.header`
	border-bottom: ${colors.primaryLight} 5px solid;
	/*position: sticky;
	top: 4rem;*/
`;
const PageTitle = styled.h1`
	padding: 0.5rem 0;
	margin: 0;

	background-color: ${colors.primaryLight};
	color: ${colors.primaryContrast};
`;
const PageYear = styled.h1`
	padding: 0.5rem 0;
	margin: 0;

	background-color: ${colors.accentLight};
	color: ${colors.primaryContrast};
`;

class Page extends React.PureComponent {
	render = () => {
		const { title, year, children, full } = this.props;

		return (
			<PageWrapper>
				<PageHeader>
					<PageTitle>
						<Container>{title}</Container>
					</PageTitle>
					{year && (
						<PageYear>
							<Container>{year}</Container>
						</PageYear>
					)}
				</PageHeader>

				{full ? (
					children
				) : (
					<Container>
						<Box width={[1, 1, 2 / 3, 2 / 3]}>{children}</Box>
					</Container>
				)}
			</PageWrapper>
		);
	};
}

Page.propTypes = {
	title: PropTypes.string.isRequired,
	year: PropTypes.string,
	full: PropTypes.bool,
	children: PropTypes.node
};

export default Page;
