import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";

function Users(props) {
  axios.get("https://x1p7q.sse.codesandbox.io/users").then(res => {
    props.setUsers(res.data.users);
  });

  return (
    <div>
      {props.users.map(u => (
        <div className={styles.usersPage}>
          <div>
            <img src={u.avatarURL} alt="Пикча" className={styles.usersAva} />
          </div>
          <div>
            {u.followed ? (
              <button
                onClick={() => {
                  props.onUnFollow(u.id);
                }}
              >
                Удалить
              </button>
            ) : (
              <button
                onClick={() => {
                  props.onFollow(u.id);
                }}
              >
                Добавить
              </button>
            )}
          </div>
          <div>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </div>
          <div>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
