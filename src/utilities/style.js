import { css } from "styled-components";

export const colors = {
	primaryDark: "#0B1824",
	primary: "#24387D",
	primaryLight: "#324C8E",
	primaryContrast: "#ffffff",
	background: "#f5f5f5",
	backgroundContrast: "#ffffff",
	accent: "#BF262E",
	accentLight: "#DF4C44",
	accentDark: "#821F25",
	accent2: "#104146",
	font: "#000000",
	fontLight: "#444444",
	borderLight: "#888888",
	success: "#2ecc71",
	info: "#3498db",
	warning: "#FCBF37",
	danger: "#e74c3c"
};

export const shadows = {
	y: "0px 2px 2px 0px rgba(0, 0, 0, 0.05)"
};

export const media = {
	minSmall: (...args) => css`
		@media (min-width: 576px) {
			${css(...args)};
		}
	`,
	maxSmall: (...args) => css`
		@media (max-width: 575px) {
			${css(...args)};
		}
	`,
	minMedium: (...args) => css`
		@media (min-width: 768px) {
			${css(...args)};
		}
	`,
	maxMedium: (...args) => css`
		@media (max-width: 767px) {
			${css(...args)};
		}
	`,
	minLarge: (...args) => css`
		@media (min-width: 992px) {
			${css(...args)};
		}
	`,
	maxLarge: (...args) => css`
		@media (max-width: 991px) {
			${css(...args)};
		}
	`,
	minXLarge: (...args) => css`
		@media (min-width: 1200px) {
			${css(...args)};
		}
	`,
	maxXLarge: (...args) => css`
		@media (max-width: 1199px) {
			${css(...args)};
		}
	`
};
