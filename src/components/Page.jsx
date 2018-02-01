import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Container from "components/Container";

import { colors } from "utilities/style";

const PageWrapper = styled.div``;

const PageHeader = styled.header`
	border-bottom: ${colors.primary} 5px solid;
	/*position: sticky;
	top: 4rem;*/
`;
const PageTitle = styled.h1`
	padding: 0.5rem 0;
	margin: 0;

	background-color: ${colors.primary};
	color: ${colors.primaryContrast};
`;
const PageYear = styled.h1`
	padding: 0.5rem 0;
	margin: 0;

	background-color: ${colors.accent};
	color: ${colors.primaryContrast};
`;

class Page extends React.PureComponent {
	render = () => {
		const { title, year, children } = this.props;

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
				{children}
			</PageWrapper>
		);
	};
}

Page.propTypes = {
	title: PropTypes.string.isRequired,
	year: PropTypes.string,
	children: PropTypes.node
};

export default Page;
