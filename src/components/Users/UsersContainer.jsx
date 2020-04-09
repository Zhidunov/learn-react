import React from "react";
import {
  setCurrentPage,
  setToggleIsFollowing,
  getUsersTC,
  setUnFollowTC,
  setFollowTC,
} from "./../../redux/usersReducer.js";
import { connect } from "react-redux";
import Users from "./Users.jsx";
import Preloader from "./../Common/Preloader/Preloader.jsx";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = pageNumber => {
    this.props.getUsersTC(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
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
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
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
