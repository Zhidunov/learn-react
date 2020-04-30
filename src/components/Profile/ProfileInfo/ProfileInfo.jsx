import React from "react";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./../ProfileStatus/ProfileStatusWithHooks.jsx";
import nonAva from "../../../nonAvatar.png";

function ProfileInfo({profile, status, updateStatusTC}) {
  return (
    <div>
      <div className={styles.avatarImg}>
        {
          profile.photos.large ? <img src={profile.photos.large} alt="logoprofile" /> : <img src={nonAva} alt="logoprofile" />
        }
      </div>
      <ProfileStatusWithHooks
        status={status}
        updateStatusTC={updateStatusTC}
      />
    </div>
  );
}

export default ProfileInfo;
