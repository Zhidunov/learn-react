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

  // addPost() {
  //   let post = {
  //     id: this._state.profilePage.posts.length + 1,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0
  //   };

  //   this._state.profilePage.posts.push(post);
  //   this._state.profilePage.newPostText = "";
  //   store._callSubscriber(this._state);
  // },
  // updateNewPostText(newPostText) {
  //   this._state.profilePage.newPostText = newPostText;
  //   this._callSubscriber(this._state);
  // },
  // addMessage() {
  //   let message = {
  //     id: this._state.dialogsPage.messages.length + 1,
  //     message: this._state.dialogsPage.newMessageText
  //   };
  //   this._state.dialogsPage.messages.push(message);
  //   this._state.dialogsPage.newMessageText = "";
  //   this._callSubscriber(this._state);
  // },
  // updateNewMessageText(newMessageText) {
  //   this._state.dialogsPage.newMessageText = newMessageText;
  //   this._callSubscriber(this._state);
  // },
  dispatch(action) {
    if (action.type === "ADD_POST") {
      let post = {
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(post);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE_NEW_POST_TEXT") {
      this._state.profilePage.newPostText = action.newPostText;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD_MESSAGE") {
      let message = {
        id: this._state.dialogsPage.messages.length + 1,
        message: this._state.dialogsPage.newMessageText
      };
      this._state.dialogsPage.messages.push(message);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE_NEW_MESSAGE_TEXT") {
      this._state.dialogsPage.newMessageText = action.newMessageText;
      this._callSubscriber(this._state);
    }
  }
};

export default store;
window.store = store;
