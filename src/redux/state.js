import { rerenderEntireTree } from "../render.js";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Это мой первый пост", likesCount: 12 },
      { id: 2, message: "Это мой второй пост", likesCount: 7 }
    ]
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
    ]
  }
};

export function addPost(postsText) {
  let post = {
    id: state.profilePage.posts.length + 1,
    message: postsText,
    likesCount: 0
  };

  state.profilePage.posts.push(post);
  rerenderEntireTree(state);
}

export default state;
