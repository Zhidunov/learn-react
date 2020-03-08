import React from "react";
import MyPosts from "./MyPosts.jsx";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "./../../../redux/profileReducer.js";

function MyPostsContainer(props) {
  let state = props.store.getState();

  function addPost() {
    props.store.dispatch(addPostActionCreator());
  }

  function deletePost() {
    alert("Удалено");
  }

  function onPostChange(text) {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      deletePost={deletePost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
}

export default MyPostsContainer;
