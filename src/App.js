import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Navigation';
import Profile from './components/Profile';

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