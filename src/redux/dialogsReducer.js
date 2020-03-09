const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
  dialogs: [
    { id: 1, name: "Андрей" },
    { id: 2, name: "Михаил" },
    { id: 3, name: "Дмитрий" },
    { id: 4, name: "Алексей" },
    { id: 5, name: "Константин" }
  ],
  messages: [
    { id: 1, message: "Привет" },
    { id: 2, message: "Как дела" },
    { id: 3, message: "Чем занимаешься?" },
    { id: 4, message: "Ку" },
    { id: 5, message: "Дратуте" }
  ],
  newMessageText: "Сообщение..."
};

function dialogsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      let message = {
        id: state.messages.length + 1,
        message: state.newMessageText
      };
      let stateCopy = { ...state };
      stateCopy.messages.push(message);
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMessageText = action.newMessageText;
      return stateCopy;
    }
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
