import { profileAPI } from "./../api/api.js";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const GET_USER_PROFILE = "GET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Это мой первый пост", likesCount: 12 },
    { id: 2, message: "Это мой второй пост", likesCount: 7 }
  ],
  newPostText: "Text",
  profile: null,
  status: ""
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST: {
      let post = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likesCount: 0
      };
      return { ...state, posts: [...state.posts, post], newPostText: "" };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newPostText };
    }
    case GET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
}

export function addPost() {
  return {
    type: ADD_POST
  };
}

export function updateNewPostText(text) {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
  };
}

export function getUserProfile(profile) {
  return {
    type: GET_USER_PROFILE,
    profile
  };
}

export function setStatus(status) {
  return {
    type: SET_STATUS,
    status
  };
}

export const getUserProfileTC = id => {
  return dispatch => {
    if (!id) {
      id = 2;
    }
    profileAPI.getProfile(id).then(data => {
      dispatch(getUserProfile(data));
    });
  };
};

export const getStatusTC = id => {
  return dispatch => {
    profileAPI.getStatus(id).then(data => {
      debugger;
      dispatch(setStatus(data));
    });
  };
};

export const updateStatusTC = status => {
  return dispatch => {
    profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(data));
      }
    });
  };
};

export default profileReducer;
