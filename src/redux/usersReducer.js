const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

function usersReducer(
  state = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
  },
  action
) {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        })
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
    default:
      return state;
  }
}

export function followActionCreator(userID) {
  return {
    type: FOLLOW,
    userID
  };
}

export function unFollowActionCreator(userID) {
  return {
    type: UNFOLLOW,
    userID
  };
}

export function setUsersActionCreator(users) {
  return {
    type: SET_USERS,
    users
  };
}

export function setCurrentPageActionCreator(page) {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: page
  };
}

export function setTotalUsersCountActionCreator(count) {
  return {
    type: SET_TOTAL_COUNT,
    totalUsersCount: count
  };
}

export function toggleIsFetchingActionCreator(isFetching) {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
  };
}

export default usersReducer;
