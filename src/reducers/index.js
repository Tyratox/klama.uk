import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { wrap } from "utilities/reducer";
import { reducer as burgerMenu } from "redux-burger-menu";

/*
#     #    #    #     # ###  #####     #    ####### ### ####### #     # 
##    #   # #   #     #  #  #     #   # #      #     #  #     # ##    # 
# #   #  #   #  #     #  #  #        #   #     #     #  #     # # #   # 
#  #  # #     # #     #  #  #  #### #     #    #     #  #     # #  #  # 
#   # # #######  #   #   #  #     # #######    #     #  #     # #   # # 
#    ## #     #   # #    #  #     # #     #    #     #  #     # #    ## 
#     # #     #    #    ###  #####  #     #    #    ### ####### #     # 
*/

import navigation, * as fromNavigation from "./navigation";

export const getBurgerMenuOpen = state => state.burgerMenu.isOpen;

export const getHeaderNavbarCollapse = wrap(
	fromNavigation.getHeaderNavbarCollapse,
	state => state.navigation
);

export const getDashboardNavbarCollapse = wrap(
	fromNavigation.getDashboardNavbarCollapse,
	state => state.navigation
);

/*
   #    #     # ####### #     # 
  # #   #     #    #    #     # 
 #   #  #     #    #    #     # 
#     # #     #    #    ####### 
####### #     #    #    #     # 
#     # #     #    #    #     # 
#     #  #####     #    #     # 
*/

import authentication, * as fromAuthentication from "./authentication";

export const getIsAuthenticated = wrap(
	fromAuthentication.getIsAuthenticated,
	state => state.authentication
);

export const getIsAuthenticating = wrap(
	fromAuthentication.getIsAuthenticating,
	state => state.authentication
);

export const getAuthenticationStatus = wrap(
	fromAuthentication.getAuthenticationStatus,
	state => state.authentication
);

export const getAuthenticatedUser = wrap(
	fromAuthentication.getAuthenticatedUser,
	state => state.authentication
);
export const getAuthenticatedUserFetching = wrap(
	fromAuthentication.getAuthenticatedUserFetching,
	state => state.authentication
);
export const getAuthenticatedUserStatus = wrap(
	fromAuthentication.getAuthenticatedUserStatus,
	state => state.authentication
);

/*
   #    ####### #######    #     #####  #     # #     # ####### #     # ####### 
  # #      #       #      # #   #     # #     # ##   ## #       ##    #    #    
 #   #     #       #     #   #  #       #     # # # # # #       # #   #    #    
#     #    #       #    #     # #       ####### #  #  # #####   #  #  #    #    
#######    #       #    ####### #       #     # #     # #       #   # #    #    
#     #    #       #    #     # #     # #     # #     # #       #    ##    #    
#     #    #       #    #     #  #####  #     # #     # ####### #     #    # 
*/

import attachment, * as fromAttachment from "./attachment";

export const getAttachmentById = wrap(
	fromAttachment.getAttachmentById,
	state => state.attachment
);

export const getAttachments = wrap(
	fromAttachment.getAttachments,
	state => state.attachment
);

export default combineReducers({
	routing: routerReducer,
	burgerMenu,
	navigation,
	authentication,
	attachment
});
