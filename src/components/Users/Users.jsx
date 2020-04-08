import React from "react";
import styles from "./Users.module.css";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api.js";

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
            <NavLink to={"/profile/" + u.id}>
              <img src={u.avatarURL} alt="Пикча" className={styles.usersAva} />
            </NavLink>
          </div>
          <div>
            {u.followed ? (
              <button
                disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => {
                  props.setUnFollowTC(u.id);
                  // props.setToggleIsFollowing(true, u.id);
                  // usersAPI.setUnFollow(u.id).then(data => {
                  //   if (data.resultCode === 0) {
                  //     props.onUnFollow(u.id);
                  //   }
                  //   props.setToggleIsFollowing(false, u.id);
                  // });
                }}
              >
                Удалить
              </button>
            ) : (
              <button
                onClick={() => {
                  props.setFollowTC(u.id);
                  // props.setToggleIsFollowing(true, u.id);
                  // usersAPI.setFollow(u.id).then(data => {
                  //   if (data.resultCode === 0) {
                  //     props.onFollow(u.id);
                  //   }
                  //   props.setToggleIsFollowing(false, u.id);
                  // });
                  // props.onFollow(u.id);
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
