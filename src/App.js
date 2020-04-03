import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Nav from "./components/Navigation/Navigation.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import { Route, BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app_main">
        <HeaderContainer />
        <Nav />
        <div className="app_main_content">
          <Route path="/profile/:UserID?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
