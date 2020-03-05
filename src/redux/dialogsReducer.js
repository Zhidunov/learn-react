const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

function dialogsReducer(state, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      let message = {
        id: state.messages.length + 1,
        message: state.newMessageText
      };
      state.messages.push(message);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText;
      return state;
    default:
      return state;
  }
}

export function addMessageActionCreator() {
  return {
    type: ADD_MESSAGE
  };
}

export function updateNewMessageActionCreator(text) {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text
  };
}

export default dialogsReducer;
