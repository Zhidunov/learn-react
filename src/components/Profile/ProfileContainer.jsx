import React from "react";
import {
  addPost,
  updateNewPostText,
  setUserProfileTC
} from "./../../redux/profileReducer.js";
import { connect } from "react-redux";
import Profile from "./Profile.jsx";
import { withAuthRedirect } from "./../hoc/withAuthRedirect.js";
import { withRouter } from "react-router";
import { compose } from "redux";

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
    profile: state.profilePage.profile
  };
}

export default compose(connect(
  mapStateToProps,
  {
    setUserProfileTC
  }
), withRouter, withAuthRedirect)(ProfileContainer);
