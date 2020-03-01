import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Navigation/Navigation.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";
import { Route, BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app_main">
        <Header />
        <Nav />
        <div className="app_main_content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                state={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                state={props.state.dialogsPage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
