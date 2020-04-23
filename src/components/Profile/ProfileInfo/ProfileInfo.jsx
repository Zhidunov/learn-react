import React from "react";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./../ProfileStatus/ProfileStatusWithHooks.jsx";

function ProfileInfo(props) {
  return (
    <div>
      <div className={styles.avatarImg}>
        <img src={props.profile.avatarURL} alt="logoprofile" />
      </div>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatusTC={props.updateStatusTC}
      />
    </div>
  );
}

export default ProfileInfo;
