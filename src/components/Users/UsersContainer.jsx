import React from "react";
import {
  onFollow,
  onUnFollow,
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
    // this.props.setToggleIsFetching(true);
    // getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    //   setTimeout(() => {
    //     this.props.setToggleIsFetching(false);
    //     this.props.setUsers(data.users);
    //     this.props.setTotalUsersCount(data.totalCount);
    //   }, 300);
    // });
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

// function mapDispatchToProps(dispatch) {
//   return {
//     onFollow: userId => {
//       dispatch(followActionCreator(userId));
//     },
//     onUnFollow: userId => {
//       dispatch(unFollowActionCreator(userId));
//     },
//     setUsers: users => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setCurrentPage: page => {
//       dispatch(setCurrentPageActionCreator(page));
//     },
//     setTotalUsersCount: count => {
//       dispatch(setTotalUsersCountActionCreator(count));
//     },
//     setToggleIsFetching: isFetching => {
//       dispatch(toggleIsFetchingActionCreator(isFetching));
//     }
//   };
// }

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
