const navigationReducer = (
	state = { headerNavbarCollapse: true, dashboardNavbarCollapse: true },
	action
) => {
	switch (action.type) {
		case "TOGGLE_HEADER_NAVBAR_COLLAPSE":
			return {
				...state,
				headerNavbarCollapse: !state.headerNavbarCollapse
			};
		case "TOGGLE_DASHBOARD_NAVBAR_COLLAPSE":
			return {
				...state,
				dashboardNavbarCollapse: !state.dashboardNavbarCollapse
			};

		default:
			return state;
	}
};

export default navigationReducer;

export const getHeaderNavbarCollapse = navigation =>
	navigation.headerNavbarCollapse;
export const getDashboardNavbarCollapse = navigation =>
	navigation.dashboardNavbarCollapse;
