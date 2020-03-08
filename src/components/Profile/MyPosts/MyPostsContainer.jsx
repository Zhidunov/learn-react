import React from "react";
import MyPosts from "./MyPosts.jsx";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "./../../../redux/profileReducer.js";
import StoreContext from "./../../../StoreContext.js";

function MyPostsContainer(props) {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();

        function addPost() {
          store.dispatch(addPostActionCreator());
        }

        function deletePost() {
          alert("Удалено");
        }

        function onPostChange(text) {
          store.dispatch(updateNewPostTextActionCreator(text));
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
      }}
    </StoreContext.Consumer>
  );
}

export default MyPostsContainer;
