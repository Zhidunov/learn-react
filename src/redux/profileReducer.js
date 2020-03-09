const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Это мой первый пост", likesCount: 12 },
    { id: 2, message: "Это мой второй пост", likesCount: 7 }
  ],
  newPostText: "Text"
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST: {
      let post = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likesCount: 0
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(post);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newPostText;
      return stateCopy;
    }
    default:
      return state;
  }
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
