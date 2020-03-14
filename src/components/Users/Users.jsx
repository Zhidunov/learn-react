import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios.get("https://x1p7q.sse.codesandbox.io/users").then(res => {
      this.props.setUsers(res.data.users);
    });
  }

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
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
                className={
                  this.props.currentPage === p ? styles.selectedPage : ""
                }
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.users.map(u => (
          <div className={styles.usersPage}>
            <div>
              <img src={u.avatarURL} alt="Пикча" className={styles.usersAva} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    this.props.onUnFollow(u.id);
                  }}
                >
                  Удалить
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.onFollow(u.id);
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
}

export default Users;
