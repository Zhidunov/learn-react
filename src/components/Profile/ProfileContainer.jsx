import React from "react";
import {
  addPost,
  updateNewPostText,
  setUserProfileTC
} from "./../../redux/profileReducer.js";
import { connect } from "react-redux";
import Profile from "./Profile.jsx";
import { withRouter, Redirect } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUserProfileTC(this.props.match.params.UserID);
  }

  render() {
    if(!this.props.isAuth){
      return <Redirect to={"/login"} />
    }
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
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  };
}


let withURLProfCont = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  {
    addPost,
    updateNewPostText,
    setUserProfileTC
  }
)(withURLProfCont);
