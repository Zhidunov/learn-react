import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import AddPostForm from "./AddPostForm/AddPostForm.jsx";

function MyPosts(props) {
  let postsElement = props.profilePage.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  function AddPost(values) {
    props.addPost(values.newPostBody);
  };

  return (
    <div>
      <div className={styles.posts}>{postsElement}</div>
      <AddPostForm onSubmit={AddPost} />
    </div>
  );
}

export default MyPosts;
