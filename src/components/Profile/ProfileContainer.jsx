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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

function mapStateToProps(state) {
  return {
    profile: state.profilePage.profile
  };
}

let withURLProfCont = withRouter(AuthRedirectComponent);

export default connect(
  mapStateToProps,
  {
    setUserProfileTC
  }
)(withURLProfCont);
