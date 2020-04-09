import React from "react";
import {
  addPost,
  updateNewPostText,
  setUserProfile,
  setUserProfileTC
} from "./../../redux/profileReducer.js";
import { connect } from "react-redux";
import * as axios from "axios";
import Profile from "./Profile.jsx";
import Preloader from "./../Common/Preloader/Preloader.jsx";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUserProfileTC(this.props.match.params.UserID);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile
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

let withURLProfCont = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  {
    addPost,
    updateNewPostText,
    setUserProfile,
    setUserProfileTC
  }
)(withURLProfCont);
