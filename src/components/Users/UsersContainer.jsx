import React from "react";
import styles from './UsersContainer.module.css';
import {
  setCurrentPage,
  setToggleIsFollowing,
  getUsersTC,
  setUnFollowTC,
  setFollowTC
} from "./../../redux/usersReducer.js";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress
} from "./../../redux/usersSelectors.js";
import { connect } from "react-redux";
import Users from "./Users.jsx";
import Preloader from "./../Common/Preloader/Preloader.jsx";

class UsersContainer extends React.Component {
  componentDidMount() {
    const {getUsersTC, currentPage, pageSize} = this.props;
    getUsersTC(currentPage, pageSize);
  }

  onPageChanged = pageNumber => {
    const {getUsersTC, pageSize} = this.props;
    getUsersTC(pageNumber, pageSize);
  };

  render() {
    return (
      <div className={styles.container}>
        {this.props.isFetching ? <Preloader /> : null}
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            onUnFollow={this.props.onUnFollow}
            onFollow={this.props.onFollow}
            setToggleIsFollowing={this.props.setToggleIsFollowing}
            followingInProgress={this.props.followingInProgress}
            setUnFollowTC={this.props.setUnFollowTC}
            setFollowTC={this.props.setFollowTC}
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
}

export default connect(
  mapStateToProps,
  {
    setCurrentPage,
    setToggleIsFollowing,
    getUsersTC,
    setUnFollowTC,
    setFollowTC
  }
)(UsersContainer);
