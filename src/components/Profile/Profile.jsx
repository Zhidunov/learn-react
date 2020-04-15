import React from "react";
import styles from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import Preloader from "../Common/Preloader/Preloader.jsx";

function Profile(props) {
  if (!props.profile) {
    return <Preloader />;
  } else { 
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatusTC={props.updateStatusTC}
      />
      <MyPostsContainer />
    </div>
  );
}
}

export default Profile;
