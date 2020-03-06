import React from "react";

const Hero = ({title, power, name, appearance , image}) => {
    
   

    return(
        <div className="main-content">
        <h1 className="hero-title">{title}</h1>
        <div className="content">
        <div className="list-hero">
        <h3 style={{textTransform: "uppercase"}}>Biography</h3>
        <ul> 
        <li><span>Name: </span>{name["full-name"]}</li>
        <li><span>Gender:</span> {appearance.gender}}</li>
        <li><span>Race:</span> {appearance.race}</li>
        </ul>
        <h3 style={{textTransform: "uppercase"}}>PowerStats</h3>
        <ul> 
        <li><span>Intelligence:</span> {power.intelligence}</li>
        <li><span>Strength:</span> {power.strength}</li>
        <li><span>Speed:</span> {power.speed}</li>
        <li><span>Durability:</span> {power.durability}</li>
        <li><span>Power:</span> {power.power}</li>
        <li><span>Combat:</span> {power.combat}</li>
        </ul>
        </div>
        
        <img src={image.url} alt="Batman" className="hero-image"></img>
        </div>
        </div>
        )
    } 
    
    export default Hero;