import React from "react";
import styles from './ProfileInfo.module.css';

function ProfileInfo() {
  return (
    <div>
      <div><img src='https://pngimage.net/wp-content/uploads/2018/06/retro-logo-png-6.png' alt='logoprofile' /></div>
      <div className={styles.descriptionBlock}>Описание</div>
    </div>
  );
}

export default ProfileInfo;