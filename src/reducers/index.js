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

import page, * as fromPage from "./page";

export const getPageById = wrap(fromPage.getPageById, state => state.page);
export const getPages = wrap(fromPage.getPages, state => state.page);

import post, * as fromPost from "./post";

export const getPostById = wrap(fromPost.getPostById, state => state.post);
export const getPosts = wrap(fromPost.getPosts, state => state.post);

import event, * as fromEvent from "./event";

export const getEventById = wrap(fromEvent.getEventById, state => state.event);
export const getEvents = wrap(fromEvent.getEvents, state => state.event);

import eventType, * as fromEventType from "./event-type";

export const getEventTypeById = wrap(
	fromEventType.getEventTypeById,
	state => state.eventType
);
export const getEventTypes = wrap(
	fromEventType.getEventTypes,
	state => state.eventType
);

export default combineReducers({
	routing: routerReducer,
	burgerMenu,
	navigation,
	authentication,
	attachment,
	page,
	post,
	event,
	eventType
});
