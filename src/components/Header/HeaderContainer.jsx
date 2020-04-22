import React from "react";
import { logout } from "./../../redux/authReducer.js";
import { connect } from "react-redux";
import Header from "./Header.jsx";

class HeaderContainer extends React.Component {
  componentDidMount() {
    //this.props.setAuthTC();
  }

  render() {
    return <Header {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth
  };
}

export default connect(
  mapStateToProps,
  {
    //setAuthTC,
    logout
  }
)(HeaderContainer);
