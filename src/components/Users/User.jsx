import React from "react";
import styles from "./Users.module.css";
import { NavLink } from "react-router-dom";
import nonAva from "../../nonAvatar.png";

function User({ user, followingInProgress, setUnFollowTC, setFollowTC }) {
  return (
    <div>
      <div>
        <NavLink to={"/profile/" + user.id}>
          
          { user.photos.small ? <img src={user.photos.small} alt="Пикча" className={styles.usersAva} /> : <img src={nonAva} alt="Пикча" className={styles.usersAva} />}
        </NavLink>
      </div>
      <div>
        {user.followed ? (
          <button
            disabled={followingInProgress.some(id => id === user.id)}
            onClick={() => {
              setUnFollowTC(user.id);
            }}
          >
            Удалить
          </button>
        ) : (
          <button
            onClick={() => {
              setFollowTC(user.id);
            }}
          >
            Добавить
          </button>
        )}
      </div>
      <div>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </div>
      {/* <div>
        <div>{user.location.country}</div>
        <div>{user.location.city}</div>
      </div> */}
    </div>
  );
}

export default User;
