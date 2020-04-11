import React from "react";
import styles from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

function Profile(props) {
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

export default Profile;
