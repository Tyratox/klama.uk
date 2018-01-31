const defaultState = { isFetching: false, status: null, user: {} };

/**
 * The reducer managing the authenticated user
 * @param {object} state The redux state
 * @param {object} action The dispatched action
 * @return {object} The new state
 */
const authenticatedUserReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "FETCH_AUTH_USER":
			return {
				...state,
				isFetching: action.isFetching,
				status:
					action.status || action.status === null
						? action.status
						: state.status,
				user: action.user ? action.user : state.user
			};
		case "RESET_JWT_TOKEN":
			return defaultState;

		default:
			return state;
	}
};

export default authenticatedUserReducer;

/**
 * Returns the authenticated user
 * @param {object} state This state
 * @return {object} The authenticted user
 */
export const getAuthenticatedUser = state => state.user;
/**
 * Checks whether the authenticated user is currently being fetched
 * @param {object} state This state
 * @return {boolean} Whether the user being fetched
 */
export const getAuthenticatedUserFetching = state => state.isFetching;
/**
 * Returns the status of the authenticated user
 * @param {object} state This state
 * @return {error} The current status
 */
export const getAuthenticatedUserStatus = state => state.status;
