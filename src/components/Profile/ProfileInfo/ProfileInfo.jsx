import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader.jsx";

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div>
        <div className={styles.avatarImg}>
          <img src={props.profile.avatarURL} alt="logoprofile" />
        </div>
        <div className={styles.descriptionBlock}>Описание</div>
      </div>
    );
  }
}

export default ProfileInfo;
