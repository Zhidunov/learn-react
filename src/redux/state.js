const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Это мой первый пост", likesCount: 12 },
        { id: 2, message: "Это мой второй пост", likesCount: 7 }
      ],
      newPostText: "Text"
    },
    dialogsPage: {
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
    }
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let post = {
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(post);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newPostText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let message = {
        id: this._state.dialogsPage.messages.length + 1,
        message: this._state.dialogsPage.newMessageText
      };
      this._state.dialogsPage.messages.push(message);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMessageText;
      this._callSubscriber(this._state);
    }
  }
};

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

export default store;
window.store = store;
