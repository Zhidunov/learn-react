import "./index.css";
import * as serviceWorker from "./serviceWorker";
import state, { obs } from "./redux/state";
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

function rerenderEntireTree(state) {
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

rerenderEntireTree(state);

obs(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
