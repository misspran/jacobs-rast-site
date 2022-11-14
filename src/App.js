import './App.css';
import React from 'react';
import About from './About/about'
import Education from './Education/education'
import Experience from './Experience/experience';
import Publication from './Publication/publication'
import NavBar from './NavBar/navBar';

function App() {

  return (
    <div className="App">
        <About />
        <Experience />
        <Publication />
        <Education />
        <NavBar/>
    </div>
  );
}

export default App;
