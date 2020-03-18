import React from "react";
import {
  followActionCreator,
  unFollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator
} from "./../../redux/usersReducer.js";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./Users.jsx";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://syr8v.sse.codesandbox.io/users?page=${
          this.props.currentPage
        }&count=${this.props.pageSize}`
      )
      .then(res => {
        this.props.setUsers(res.data.users);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://syr8v.sse.codesandbox.io/users?page=${pageNumber}&count=${
          this.props.pageSize
        }`
      )
      .then(res => {
        this.props.setUsers(res.data.users);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        onUnFollow={this.props.onUnFollow}
        onFollow={this.props.onFollow}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFollow: userId => {
      dispatch(followActionCreator(userId));
    },
    onUnFollow: userId => {
      dispatch(unFollowActionCreator(userId));
    },
    setUsers: users => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: page => {
      dispatch(setCurrentPageActionCreator(page));
    },
    setTotalUsersCount: count => {
      dispatch(setTotalUsersCountActionCreator(count));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
