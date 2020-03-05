const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

function profileReducer(state, action) {
  if (action.type === ADD_POST) {
    let post = {
      id: state.posts.length + 1,
      message: state.newPostText,
      likesCount: 0
    };
    state.posts.push(post);
    state.newPostText = "";
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newPostText;
  }
  return state;
}

export function addPostActionCreator() {
  return {
    type: ADD_POST
  };
}

export function updateNewPostTextActionCreator(text) {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
  };
}

export default profileReducer;
