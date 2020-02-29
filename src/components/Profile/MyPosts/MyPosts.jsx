import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

function MyPosts(props) {
  let postsElement = props.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostText = React.createRef();

  function addPost() {
    props.addPost();
  }

  function deletePost() {
    alert("Удалено");
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
          value={props.newPostText}
        />
        <div>
          <button onClick={addPost}>Опубликовать</button>
          <button onClick={deletePost}>Удалить</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElement}</div>
    </div>
  );
}

export default MyPosts;
