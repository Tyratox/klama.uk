import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { elastic as Menu } from "react-burger-menu";
import { decorator as reduxBurgerMenu } from "redux-burger-menu";

import Link from "components/Link";

import HomeIcon from "react-icons/lib/fa/home";
import CartIcon from "react-icons/lib/fa/shopping-cart";
import CheckoutIcon from "react-icons/lib/fa/money";

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
					<BurgerItem seperator>
						<Link to="https://feuerschutz.ch" negative flex>
							<HomeIcon />Feed
						</Link>
					</BurgerItem>
					<BurgerItem>
						<Link to="/cart" negative flex>
							<CartIcon />x
						</Link>
					</BurgerItem>
					<BurgerItem seperator>
						<Link to="/checkout" negative flex>
							<CheckoutIcon />y
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
