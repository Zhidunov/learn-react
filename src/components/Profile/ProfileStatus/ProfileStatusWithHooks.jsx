import React, { useState } from "react";
import styles from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = props => {
  let stateWithSetState = useState(false);
  let editMode = stateWithSetState[0];
  let setEditMode = stateWithSetState[1];

  return (
    <div>
      {!editMode && (
        <div>
          <span>{props.status || "Emty status"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input autoFocus={true} />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
