const ADD_MESSAGE = "ADD_MESSAGE";

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
  ]
};

function dialogsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      let message = {
        id: state.messages.length + 1,
        message: action.text
      };
      return {
        ...state,
        messages: [...state.messages, message]
      };
    }
    default:
      return state;
  }
}

export function AddMessage(text) {
  return {
    type: ADD_MESSAGE,
    text
  };
}

export default dialogsReducer;
