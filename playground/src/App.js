//each App file should contain only one React components

import React from 'react';
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';
import ToDo from './components/ToDo.js';
import Main from './components/Main.js';
import Logo from './components/Logo.js';
import './App.css';
//Testing comments
function App() {
	//do your Javascript stuff here
  
	//const firstName = Joseph;
	//const lastName = Joestar;
  
    //returns html contents to index.js' App parameter
    //aka: do your html stuff here
	return (
    //always wrap adjacent tags in a div, will cause error otherwise
		<div className="App">
			<NavBar />
			
			<header className="App-header">
		
			<Main />
			<Logo />
		
			</header>
		</div>
    );
}

export default App;
