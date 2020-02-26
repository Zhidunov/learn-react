import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let posts = [
  { id: 1, message: "Это мой первый пост", likesCount: 12 },
  { id: 2, message: "Это мой второй пост", likesCount: 7 }
];

let dialogs = [
  { id: 1, name: "Андрей" },
  { id: 2, name: "Михаил" },
  { id: 3, name: "Дмитрий" },
  { id: 4, name: "Алексей" },
  { id: 5, name: "Константин" }
];

let messages = [
  { id: 1, message: "Привет" },
  { id: 2, message: "Как дела" },
  { id: 3, message: "Чем занимаешься?" },
  { id: 4, message: "Ку" },
  { id: 5, message: "Дратуте" }
];

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
