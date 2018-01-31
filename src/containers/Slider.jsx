import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

const SliderWrapper = styled.div`
	height: 300px;
`;

class Slider extends React.PureComponent {
	render = () => {
		return <SliderWrapper />;
	};
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Slider);
