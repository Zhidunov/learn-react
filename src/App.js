import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';

function App() {
  return (
    <div className='app-main'>
      <Header />
      <Nav />
      <div className='app-main-content'>
      <Profile />
      <Dialogs />
      </div>
    </div>
  );
}

export default App;