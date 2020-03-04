import React from 'react';
import HeroesList from "./HeoresList";
import DC from "../Img/dc-log.png";
import marvel from "../Img/marvel-logo.png"

import '../App.css';

function App() {


  return (
    <div className="App">
      <div className="heading">
        <img src={DC} alt="dc-logo" className="logos" style={{width: 140}}></img>
        <div className="title">
        <h1>Heroes Library</h1>
        </div>
        <img src={marvel} alt="marvel-logo" style={{alignSelf: "center", width:180}} className="logos"></img>
      </div>
     
     <HeroesList />
    </div>
  );
}

export default App;
