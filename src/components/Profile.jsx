import React from "react";
import styles from './Profile.module.css';

function Profile() {
  return (
    <div className={styles.profile}>
      <div><img src='https://pngimage.net/wp-content/uploads/2018/06/retro-logo-png-6.png' alt='logoprofile' /></div>
      <div>Аватар и описание</div>
      <div>
        Посты
        <div>Новый пост</div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
