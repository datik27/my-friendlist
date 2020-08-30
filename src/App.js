import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/NavMenu/NavMenu';
import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';

function App() {
  return (
    <div>
      <NavMenu></NavMenu>
      <Header></Header>
      <MainBody></MainBody>
      
    </div>
  );
}

export default App;
