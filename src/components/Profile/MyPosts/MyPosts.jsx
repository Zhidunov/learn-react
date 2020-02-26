import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

function MyPosts() {
  let posts = [
    { id: 1, message: "Это мой первый пост", likesCount: 12 },
    { id: 2, message: "Это мой второй пост", likesCount: 7 }
  ];

  let postsElement = posts.map(p => (
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
