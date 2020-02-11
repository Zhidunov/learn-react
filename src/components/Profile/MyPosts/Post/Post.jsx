import React from "react";
import styles from "./Post.module.css";

function Post(props) {
  return (
    <div className={styles.item}>
      <img src='https://lh3.googleusercontent.com/proxy/iQR_q9x3etxwacPCwSIyikGuCUYoB_YvP9W0VQ-EwekrOOikj16nYqB7nWafkmM7yXDYGljCroKGusjj-uIwpuIWAE69FjvBodZuLZ5N0eVxEtku_GUKIUkVzjsdrh9OlhWPjSrk' alt='Аватар' />
      <div>{props.message}</div>
    </div>
  );
}

export default Post;