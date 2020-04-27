import { profileAPI } from "./../api/api.js";

const ADD_POST = "ADD_POST";
const GET_USER_PROFILE = "GET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  posts: [
    { id: 1, message: "Это мой первый пост", likesCount: 12 },
    { id: 2, message: "Это мой второй пост", likesCount: 7 }
  ],
  profile: null,
  status: ""
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST: {
      let post = {
        id: state.posts.length + 1,
        message: action.text,
        likesCount: 0
      };
      return { ...state, posts: [...state.posts, post], newPostText: "" };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => {
          if (p.id !== action.id) return true;
          else {
            return false;
          }
        })
      };
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

export function addPost(text) {
  return {
    type: ADD_POST,
    text
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id
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
