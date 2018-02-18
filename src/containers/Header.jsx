import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import { colors } from "utilities/style";

import {
	getHeaderNavbarCollapse,
	getAuthenticatedUser,
	getAuthenticatedUserFetching
} from "reducers";

import { action as toggleBurgerMenuAction } from "redux-burger-menu";
import { toggleHeaderNavbarCollapse } from "actions/navigation";
import { resetJwtToken } from "actions/authentication";

import { getBurgerMenuOpen } from "reducers";

import Link from "components/Link";
import Navbar from "components/Navbar";
import Container from "components/Container";
import Placeholder from "components/Placeholder";
import Flexbar from "components/Flexbar";
import Push from "components/Push";
import MediaQuery from "components/MediaQuery";
import NavItem from "components/NavItem";

import MenuIcon from "react-icons/lib/md/menu";

const PreUser = styled.div`
	margin-left: auto;
	flex-grow: 1;
`;

const HeaderWrapper = styled.div`
	position: sticky;
	top: 0;

	z-index: 100;

	background-color: ${colors.primaryContrast};
	color: ${colors.primaryLight};
`;

class Header extends React.PureComponent {
	render = () => {
		const {
			isNavbarOpen,
			isBurgerMenuOpen,
			toggleNavbar,
			toggleBurgerMenu,
			user: { username },
			fetchingUser,
			logout,
			preUser
		} = this.props;

		return (
			<HeaderWrapper>
				<Navbar>
					<Container>
						<Flexbar>
							<NavItem>
								<Link to="/">
									<img width="155" height="222" src="/img/logo-blue.svg" />
								</Link>
							</NavItem>
							<Push left>
								<MediaQuery md up>
									<NavItem>
										<Link to="/">Events</Link>
									</NavItem>
									<NavItem>
										<Link to="/blog">Blog</Link>
									</NavItem>
									<NavItem>
										<Link to="/page/about">Verein</Link>
									</NavItem>
									<NavItem>
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
										>
											Kontakt
										</Link>
									</NavItem>
								</MediaQuery>
								<MediaQuery md down>
									<NavItem onClick={toggleBurgerMenu}>
										<MenuIcon size="25" />
									</NavItem>
								</MediaQuery>
							</Push>
						</Flexbar>
					</Container>
				</Navbar>
			</HeaderWrapper>
		);
	};
}

Header.propTypes = {
	preUser: PropTypes.node
};

const mapStateToProps = state => ({
	isNavbarOpen: !getHeaderNavbarCollapse(state),
	isBurgerMenuOpen: getBurgerMenuOpen(state),
	user: getAuthenticatedUser(state) || {},
	fetchingUser: getAuthenticatedUserFetching(state)
});

const mapDispatchToProps = dispatch => ({
	toggleNavbar() {
		return dispatch(toggleHeaderNavbarCollapse());
	},
	toggleBurgerMenu(open) {
		return dispatch(toggleBurgerMenuAction(open));
	},
	logout() {
		dispatch(resetJwtToken());
		dispatch(push("/login"));
	}
});

const mergeProps = (mapStateToProps, mapDispatchToProps, ownProps) => ({
	...mapStateToProps,
	...mapDispatchToProps,
	...ownProps,
	toggleBurgerMenu() {
		return mapDispatchToProps.toggleBurgerMenu(
			!mapStateToProps.isBurgerMenuOpen
		);
	}
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Header);
