import React from "react";
import styles from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import Preloader from "../Common/Preloader/Preloader.jsx";

function Profile({profile, status, updateStatusTC}) {
  if (!profile) {
    return <Preloader />;
  } else { 
  return (
    <div className={styles.container}>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatusTC={updateStatusTC}
      />
      <MyPostsContainer />
    </div>
  );
}
}

export default Profile;
