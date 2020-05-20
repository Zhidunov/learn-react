import React from "react";
import "./App.css";
import NavigationContainer from "./components/Navigation/NavigationContainer.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import { Route, withRouter, HashRouter, Switch } from "react-router-dom";
import { initializeApp } from "./redux/appReducer.js";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/Common/Preloader/Preloader";
import { Provider } from "react-redux";
import store from "./redux/store";
import { withLazySuspense } from "./components/hoc/withLazySuspense.js";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer.jsx")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer.jsx")
);
const Settings = React.lazy(() => import("./components/Settings/Settings.jsx"));
const Login = React.lazy(() => import("./components/Login/Login.jsx"));
const News = React.lazy(() => import("./components/News/News.jsx"));
const Games = React.lazy(() => import("./components/Games/Games.jsx"));

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
        <NavigationContainer />
        <div className="app_main_content">
          <Switch>
            <Route
              path="/profile/:UserID?"
              render={withLazySuspense(ProfileContainer)}
            />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route
              path="/dialogs"
              render={withLazySuspense(DialogsContainer)}
            />
            <Route path="/login" render={withLazySuspense(Login)} />
            <Route path="/news" component={withLazySuspense(News)} />
            <Route path="/games" component={withLazySuspense(Games)} />
            <Route path="/settings" component={withLazySuspense(Settings)} />
          </Switch>
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

const MainApp = (props) => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
