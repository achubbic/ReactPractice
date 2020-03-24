//each App file should contain only one React components

import React from 'react';
import logo from './logo.svg';
import inigo from './inigoMontoya.jpg';
import Footer from './Footer.js';
import NavBar from './NavBar.js';
import './App.css';
//Testing comments
function App() {
  //returns html contents to index.js' App parameter
  return (
    //always wrap adjacent tags in a div, will cause error otherwise
    <div className="App">
      <header className="App-header">
	  
		<NavBar />
        <img src={logo} className="App-logo" alt="logo" />
		
      </header>
    </div>
  );
}

export default App;
