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
    this.props.getUserProfileTC(this.props.match.params.UserID);
    this.props.getStatusTC(this.props.match.params.UserID);
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
    status: state.profilePage.status
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
