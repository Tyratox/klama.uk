import { combineReducers } from "redux";
import { wrap } from "utilities/reducer";

import user, * as fromAuthenticatedUser from "./user";

const isAuthenticated = (
	state = localStorage.getItem("jwt-token") ? true : false,
	action
) => {
	switch (action.type) {
		case "FETCH_JWT_TOKEN":
			return !action.isFetching && action.token;
		case "RESET_JWT_TOKEN":
			return false;
		default:
			return state;
	}
};

const isFetching = (state = false, action) => {
	switch (action.type) {
		case "FETCH_JWT_TOKEN":
			return action.isFetching;
		case "RESET_JWT_TOKEN":
			return false;
		default:
			return state;
	}
};

const status = (state = null, action) => {
	switch (action.type) {
		case "FETCH_JWT_TOKEN":
			return action.status;
		case "RESET_JWT_TOKEN":
			return action.status;
		default:
			return state;
	}
};

export default combineReducers({ isAuthenticated, isFetching, status, user });

export const getIsAuthenticated = state => state.isAuthenticated;
export const getIsAuthenticating = state => state.isFetching;
export const getAuthenticationStatus = state => state.status;

export const getAuthenticatedUser = wrap(
	fromAuthenticatedUser.getAuthenticatedUser,
	state => state.user
);
export const getAuthenticatedUserFetching = wrap(
	fromAuthenticatedUser.getAuthenticatedUserFetching,
	state => state.user
);
export const getAuthenticatedUserStatus = wrap(
	fromAuthenticatedUser.getAuthenticatedUserStatus,
	state => state.user
);
