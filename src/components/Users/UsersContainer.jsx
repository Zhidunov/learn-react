import Users from "./Users.jsx";
import {
  followActionCreator,
  unFollowActionCreator,
  setUsersActionCreator
} from "./../../redux/usersReducer.js";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    users: state.usersPage.users
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
    setUsers: () => {
      dispatch(setUsersActionCreator());
    }
  };
}

let UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersContainer;
