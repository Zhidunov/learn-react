const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
    return {
        ...state,
        ...action.data,
        isAuth: true
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userID, email, login) => {
  return {
    type: SET_AUTH_USER_DATA,
    data: {
      id: userID,
      email: email,
      login: login
    }
  };
};

export const setToggleIsFetching = isFetching => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
  };
};

export default authReducer;
