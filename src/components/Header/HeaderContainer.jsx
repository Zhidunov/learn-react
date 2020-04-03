import React from "react";
import { setUserData, setToggleIsFetching } from "./../../redux/authReducer.js";
import { connect } from "react-redux";
import * as axios from "axios";
import Header from "./Header.jsx";
import Preloader from "./../Common/Preloader/Preloader.jsx";

class HeaderContainer extends React.Component {
  componentDidMount() {
    //this.props.setToggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
      // .get(
      //     `http://localhost:4000/users?page=${
      //       this.props.currentPage
      //     }&count=${this.props.pageSize}`
      //   )
      .then(res => {
        //this.props.setToggleIsFetching(false);
        debugger;
      });
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
    isFetching: state.auth.isFetching
  };
}

export default connect(
  mapStateToProps,
  {
    setUserData,
    setToggleIsFetching
  }
)(HeaderContainer);
