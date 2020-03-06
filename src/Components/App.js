import React from 'react';
import HeroesList from "./HeoresList";
import DC from "../Img/dc-log.png";
import marvel from "../Img/marvel-logo.png"

import '../App.css';

function App() {
  

  return (
    
    <div className="App">
      <div className="heading">
        <img src={DC} alt="dc-logo" className="logos" id="dc-logo"></img>
        <div className="title">
        <h1>Heroes Library</h1>
        </div>
        <img src={marvel} alt="marvel-logo"  className="logos" id="marvel-logo"></img>
      </div>
     
     <HeroesList />
    </div>
  );
}

export default App;
