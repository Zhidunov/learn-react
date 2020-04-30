import profileReducer, { addPost, deletePost } from "./profileReducer.js";

let state = {
  posts: [
    { id: 1, message: "Это мой первый пост", likesCount: 12 },
    { id: 2, message: "Это мой второй пост", likesCount: 7 }
  ]
};

it("Должен быть добавлен новый пост", () => {
  let action = addPost("text-test");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

it("Должен быть удален пост с заданным id", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
});
