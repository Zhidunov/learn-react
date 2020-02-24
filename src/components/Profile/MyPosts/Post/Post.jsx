import React from "react";
import styles from "./Post.module.css";

function Post(props) {
  return (
    <div className={styles.item}>
      <img src='https://www.epicentrofestival.com/wp-content/uploads/2019/12/Tattoo-Clipart-Greaser-Pin-Up-Girl-Png-720x1149.jpg' alt='Аватар' />
      <div>{props.message}</div>
      <div>Понравилось: {props.likesCount}</div>
    </div>
  );
}

export default Post;