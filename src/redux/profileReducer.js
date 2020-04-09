import { profileAPI } from "./../api/api.js";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Это мой первый пост", likesCount: 12 },
    { id: 2, message: "Это мой второй пост", likesCount: 7 }
  ],
  newPostText: "Text",
  profile: null
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
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
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

export function setUserProfile(profile) {
  return {
    type: SET_USER_PROFILE,
    profile
  };
}

export const setUserProfileTC = (id) => {
  return (dispatch) => {
    if (!id) {
      id = 2;
    }
    profileAPI.setProfile(id).then(data => {
        dispatch(setUserProfile(data));
      });
  }
}

export default profileReducer;
