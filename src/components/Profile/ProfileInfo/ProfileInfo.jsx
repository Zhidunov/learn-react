import React from "react";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./../ProfileStatus/ProfileStatusWithHooks.jsx";

function ProfileInfo({profile, status, updateStatusTC}) {
  return (
    <div>
      <div className={styles.avatarImg}>
        <img src={profile.avatarURL} alt="logoprofile" />
      </div>
      <ProfileStatusWithHooks
        status={status}
        updateStatusTC={updateStatusTC}
      />
    </div>
  );
}

export default ProfileInfo;
