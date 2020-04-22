import React from "react";
import {
  getUserProfileTC,
  getStatusTC,
  updateStatusTC
} from "./../../redux/profileReducer.js";
import { connect } from "react-redux";
import Profile from "./Profile.jsx";
import { withAuthRedirect } from "./../hoc/withAuthRedirect.js";
import { withRouter } from "react-router";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.UserID;
    if (!userID) {
      userID = this.props.authorizedUserID;
    }
    this.props.getUserProfileTC(userID);
    this.props.getStatusTC(userID);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatusTC={this.props.updateStatusTC}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserID: state.auth.UserID,
    isAuth: state.auth.isAuth
  };
}

export default compose(
  connect(
    mapStateToProps,
    {
      getUserProfileTC,
      getStatusTC,
      updateStatusTC
    }
  ),
  withRouter //withAuthRedirect
)(ProfileContainer);
