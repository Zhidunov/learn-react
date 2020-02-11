import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';

function App() {
  return (
    <div className='app-main'>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;