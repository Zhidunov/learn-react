import React from "react";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./../ProfileStatus/ProfileStatus.jsx";

function ProfileInfo(props) {
  return (
    <div>
      <div className={styles.avatarImg}>
        <img src={props.profile.avatarURL} alt="logoprofile" />
      </div>
      <ProfileStatus
        status={props.status}
        updateStatusTC={props.updateStatusTC}
      />
    </div>
  );
}

export default ProfileInfo;
