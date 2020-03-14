const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

function usersReducer(
  state = { users: [], pageSize: 5, totalUsersCount: 20, currentPage: 1 },
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

export default usersReducer;