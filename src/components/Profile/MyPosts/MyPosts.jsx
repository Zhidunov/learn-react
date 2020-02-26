import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

function MyPosts(props) {
  let postsElement = props.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={styles.postsBlock}>
      <div>
        <textarea />
        <div>
          <button>Опубликовать</button>
          <button>Удалить</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElement}</div>
    </div>
  );
}

export default MyPosts;
