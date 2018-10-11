import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { elastic as Menu } from "react-burger-menu";
import { decorator as reduxBurgerMenu } from "redux-burger-menu";

import Link from "components/Link";

import HomeIcon from "react-icons/lib/fa/home";
import BlogIcon from "react-icons/lib/io/social-rss";
import GroupIcon from "react-icons/lib/io/ios-people";
import ContactIcon from "react-icons/lib/io/android-chat";

import { getIsAuthenticated } from "reducers";
import { colors } from "utilities/style";

const BurgerList = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
`;
const BurgerItem = styled.li`
	margin: 0 0 0.5rem 0;
	padding: 0 0 0.5rem 0;
	${({ seperator }) =>
		seperator ? `border-bottom: ${colors.primaryContrast} 1px solid;` : ""};

	svg {
		margin-right: 0.5rem;
	}
`;

const ReduxBurgerMenu = reduxBurgerMenu(Menu);

class BurgerMenu extends React.PureComponent {
	render = () => {
		const { isAuthenticated } = this.props;

		return (
			<ReduxBurgerMenu right>
				<BurgerList>
					<BurgerItem>
						<Link to="/" negative flex>
							<HomeIcon />Events
						</Link>
					</BurgerItem>
					<BurgerItem>
						<Link to="/blog" negative flex>
							<BlogIcon />Blog
						</Link>
					</BurgerItem>
					<BurgerItem>
						<Link to="/page/about" negative flex>
							<GroupIcon />Verein
						</Link>
					</BurgerItem>
					<BurgerItem>
						<Link
							onClick={() => {
								window.location =
									"mailto:" +
									"siul"
										.split("")
										.reverse()
										.join("") +
									"@luishartl.ch";
							}}
							negative
							flex
						>
							<ContactIcon />Kontakt
						</Link>
					</BurgerItem>
				</BurgerList>
			</ReduxBurgerMenu>
		);
	};
}

const mapStateToProps = state => ({
	isAuthenticated: getIsAuthenticated(state)
});

export default connect(mapStateToProps)(BurgerMenu);
