import { loginAPI } from "./../api/api.js";

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
        ...action.data
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

export const setAuthUserData = (userID, email, login, isAuth) => {
  return {
    type: SET_AUTH_USER_DATA,
    data: {
      id: userID,
      email: email,
      login: login,
      isAuth: isAuth
    }
  };
};

export const setToggleIsFetching = isFetching => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
  };
};

export const setAuthTC = () => {
  return dispatch => {
    loginAPI.setAuth().then(data => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => {
  return dispatch => {
    loginAPI.login(email, password, rememberMe).then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthTC());
      }
    });
  };
};

export const logout = () => {
  return dispatch => {
    loginAPI.logout().then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
