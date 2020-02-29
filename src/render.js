import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMessageText
} from "./redux/state.js";

export function rerenderEntireTree(state) {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
      updateNewMessageText={updateNewMessageText}
      addMessage={addMessage}
    />,
    document.getElementById("root")
  );
}
