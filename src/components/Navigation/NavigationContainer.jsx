import React from "react";
import { logout } from "./../../redux/authReducer.js";
import { connect } from "react-redux";
import Navigation from "./Navigation.jsx";

class NavigationContainer extends React.Component {

  render() {
    return <Navigation {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  };
}

export default connect(
  mapStateToProps,
  {
    logout
  }
)(NavigationContainer);