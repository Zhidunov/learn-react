import { usersAPI } from "./../api/api.js";
import { updateObjectInArray } from "./../utils/object-helpers.js";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";

function usersReducer(
  state = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
  },
  action
) {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, "id", action.userID, {followed: true})
        
        // users: state.users.map(u => {
        //   if (u.id === action.userID) {
        //     return { ...u, followed: true };
        //   }
        //   return u;
        // })
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, "id", action.userID, {followed: false})        
        // users: state.users.map(u => {
        //   if (u.id === action.userID) {
        //     return { ...u, followed: false };
        //   }
        //   return u;
        // })
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      };
    }
    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      };
    }
    case TOGGLE_IS_FOLLOWING: {
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.id]
          : [state.followingInProgress.filter(id => id !== action.id)]
      };
    }
    default:
      return state;
  }
}

export function followSuccess(userID) {
  return {
    type: FOLLOW,
    userID
  };
}

export function unfollowSuccess(userID) {
  return {
    type: UNFOLLOW,
    userID
  };
}

export function setUsers(users) {
  return {
    type: SET_USERS,
    users
  };
}

export function setCurrentPage(page) {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: page
  };
}

export function setTotalUsersCount(count) {
  return {
    type: SET_TOTAL_COUNT,
    totalUsersCount: count
  };
}

export function setToggleIsFetching(isFetching) {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
  };
}

export function setToggleIsFollowing(followingInProgress, id) {
  return {
    type: TOGGLE_IS_FOLLOWING,
    followingInProgress: followingInProgress,
    id: id
  };
}

export const getUsersTC = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setToggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));
  let data = await usersAPI.getUsers(currentPage, pageSize);

  dispatch(setToggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
  
}


const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(setToggleIsFollowing(true, id));
  let data = await apiMethod(id);
  if (data.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(setToggleIsFollowing(false, id));
}

export const setUnFollowTC = (id) => (dispatch) => {
  followUnfollowFlow(dispatch, id, usersAPI.setUnFollow.bind(usersAPI), unfollowSuccess);
}

export const setFollowTC = (id) => (dispatch) => {
  followUnfollowFlow(dispatch, id, usersAPI.setFollow.bind(usersAPI), followSuccess);
}

export default usersReducer;
