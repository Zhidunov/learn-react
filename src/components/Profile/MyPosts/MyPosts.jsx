import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

function MyPosts(props) {
  let postsElement = props.profilePage.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostText = React.createRef();

  function onAddPost() {
    props.addPost();
  }

  function onDeletePost() {
    props.deletePost();
  }

  function onPostChange() {
    let text = newPostText.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={styles.postsBlock}>
      <div>
        <textarea
          ref={newPostText}
          onChange={onPostChange}
          value={props.profilePage.newPostText}
        />
        <div>
          <button onClick={onAddPost}>Опубликовать</button>
          <button onClick={onDeletePost}>Удалить</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElement}</div>
    </div>
  );
}

export default MyPosts;
