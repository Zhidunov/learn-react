import React from "react";
import styles from "./Users.module.css";

function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return (
            <span
              className={props.currentPage === p ? styles.selectedPage : ""}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
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
