import styled from "styled-components";

import { colors, shadows } from "utilities/style";

const Navbar = styled.div`
	position: relative;
	background-color: ${colors.primaryContrast};
	color: ${colors.primaryLight};
	box-shadow: ${shadows.y};
	padding: 1rem 0;
	height: 2rem;
`;

export default Navbar;
