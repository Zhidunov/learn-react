import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader.jsx";
import ProfileStatus from "./../ProfileStatus/ProfileStatus.jsx";

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div>
        <div className={styles.avatarImg}>
          <img src={props.profile.avatarURL} alt="logoprofile" />
        </div>
        <ProfileStatus status={"Hello World!!!"} />
      </div>
    );
  }
}

export default ProfileInfo;
