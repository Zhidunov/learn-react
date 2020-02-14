import React from "react";
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

function Profile() {
  return (
    <div>
      <div><img src='https://pngimage.net/wp-content/uploads/2018/06/retro-logo-png-6.png' alt='logoprofile' /></div>
      <div>Описание</div>
      <MyPosts />
    </div>
  );
}

export default Profile;