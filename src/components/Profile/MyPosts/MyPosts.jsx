import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

function MyPosts() {
  return (
    <div>
      <div>
          <textarea></textarea>
          <button>Опубликовать</button>
          <button>Удалить</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default MyPosts;