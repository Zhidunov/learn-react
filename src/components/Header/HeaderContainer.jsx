import React from "react";
import { setAuthUserData, setToggleIsFetching } from "./../../redux/authReducer.js";
import { connect } from "react-redux";
import * as axios from "axios";
import Header from "./Header.jsx";
import Preloader from "./../Common/Preloader/Preloader.jsx";

class HeaderContainer extends React.Component {
  componentDidMount() {
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
        if(res.data.resultCode === 0){
          let {id, email, login} = res.data.data;
          this.props.setAuthUserData(id, email, login);
        }
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
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth
  };
}

export default connect(
  mapStateToProps,
  {
    setAuthUserData,
    setToggleIsFetching
  }
)(HeaderContainer);
