import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Nav from "./components/Navigation/Navigation.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import Login from "./components/Login/Login.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import { Route, withRouter } from "react-router-dom";
import { initializeApp } from "./redux/appReducer.js";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app_main">
        <HeaderContainer />
        <Nav />
        <div className="app_main_content">
          <Route path="/profile/:UserID?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    initialized: state.app.initialized
  };
};

export default compose(
  connect(
    mapStateToProps,
    { initializeApp }
  ),
  withRouter
)(App);
