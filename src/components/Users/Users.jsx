import React from "react";
import styles from "./Users.module.css";
import Paginator from "../Common/Paginator/Paginator.jsx";
import User from "./User.jsx";

function Users({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  followingInProgress,
  setUnFollowTC,
  setFollowTC,
  ...props
}) {
  return (
    <div className={styles.usersPage}>
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      <div>
        {props.users.map(u => (
          <User user={u} followingInProgress={followingInProgress} setUnFollowTC={setUnFollowTC} setFollowTC={setFollowTC} key={u.id} />
        ))}
      </div>
    </div>
  );
}

export default Users;
