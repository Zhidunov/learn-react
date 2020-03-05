import dialogsReducer from "./dialogsReducer.js";
import profileReducer from "./profileReducer.js";
import sidebarReducer from "./sidebarReducer.js";

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
    },
    sidebarPage: {}
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;
