import React from "react";
import styles from "./Users.module.css";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

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
                onClick={() => {
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${
                        u.id
                      }`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "c8c905ae-18c5-4694-965e-904ae69c0400"
                        }
                      }
                    )
                    .then(res => {
                      if (res.data.resultCode === 0) {
                        props.onUnFollow(u.id);
                      }
                    });
                }}
              >
                Удалить
              </button>
            ) : (
              <button
                onClick={() => {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${
                        u.id
                      }`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "c8c905ae-18c5-4694-965e-904ae69c0400"
                        }
                      }
                    )
                    .then(res => {
                      if (res.data.resultCode === 0) {
                        props.onFollow(u.id);
                      }
                    });
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
