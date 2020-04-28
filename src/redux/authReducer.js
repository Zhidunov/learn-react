import { loginAPI } from "./../api/api.js";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";
const TOGGLE_IS_FETCHING = "auth/TOGGLE_IS_FETCHING";

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
      email,
      login,
      isAuth
    }
  };
};

export const setToggleIsFetching = isFetching => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
  };
};

export const setAuthTC = () => async (dispatch) => {
    let response = await loginAPI.setAuth();
    
    if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    let res = await loginAPI.login(email, password, rememberMe);
    if (res.data.resultCode === 0) {
        dispatch(setAuthTC());
    } else {
       debugger
       let message =
       res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
       dispatch(
         stopSubmit("login", {
           _error: message
         })
       );
      }
  };

export const logout = () => async (dispatch) => {
    let res = await loginAPI.logout();
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
  };

export default authReducer;
