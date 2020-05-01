import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Nav from "./components/Navigation/Navigation.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import { Route, withRouter, BrowserRouter } from "react-router-dom";
import { initializeApp } from "./redux/appReducer.js";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/Common/Preloader/Preloader";
import { Provider } from "react-redux";
import store from "./redux/store";
import {withLazySuspense} from "./components/hoc/withLazySuspense.js";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer.jsx"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer.jsx"));
const Settings = React.lazy(() => import("./components/Settings/Settings.jsx"));
const Login = React.lazy(() => import("./components/Login/Login.jsx"));
const News = React.lazy(() => import("./components/News/News.jsx"));
const Music = React.lazy(() => import("./components/Music/Music.jsx"));


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
          <Route path="/profile/:UserID?" render={withLazySuspense(ProfileContainer)} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/dialogs" render={withLazySuspense(DialogsContainer)} />
          <Route path="/login" render={withLazySuspense(Login)} />
          <Route path="/news" component={withLazySuspense(News)} />
          <Route path="/music" component={withLazySuspense(Music)} />
          <Route path="/settings" component={withLazySuspense(Settings)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

const AppContainer = compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);

const SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiJSApp;
