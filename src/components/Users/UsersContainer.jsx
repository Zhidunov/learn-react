import Users from "./Users.jsx";
import {
  followActionCreator,
  unFollowActionCreator,
  setUsersActionCreator
} from "./../../redux/usersReducer.js";
import { connect } from "react-redux";

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
    }
  };
}

let UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersContainer;