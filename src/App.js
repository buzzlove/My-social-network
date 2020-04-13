import React from 'react';
import './App.css';
import NavBar from './components/html_components/nav.jsx';
import Profile from './components/html_components/profile.jsx';
import Header from './components/html_components/header.jsx';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <Profile />
    </div>  
  );
}

export default App;

