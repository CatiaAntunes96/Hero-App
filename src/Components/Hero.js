import React from "react";

function heroAttributeStr(attribute){
    return !attribute || attribute === "null" ? "N/A" : attribute;
}


const Hero = ({title, power, name, appearance , image}) => {

    return(
        <div className="main-content">
        <h1 className="hero-title">{title}</h1>
        <div className="content">
        <div className="list-hero">
        <h3 style={{textTransform: "uppercase"}}>Biography</h3>
        <ul> 
        <li><span>Name: </span>{name["full-name"]}</li>
        <li><span>Gender:</span> {heroAttributeStr(appearance.gender)}</li>
        <li><span>Race:</span> {heroAttributeStr(appearance.race)}</li>
        </ul>
        <h3 style={{textTransform: "uppercase"}}>PowerStats</h3>
        <ul> 
        <li><span>Intelligence:</span> {heroAttributeStr(power.intelligence)}</li>
        <li><span>Strength:</span> {heroAttributeStr(power.strength)}</li>
        <li><span>Speed:</span> {heroAttributeStr(power.speed)}</li>
        <li><span>Durability:</span> {heroAttributeStr(power.durability)}</li>
        <li><span>Power:</span> {heroAttributeStr(power.power)}</li>
        <li><span>Combat:</span> {heroAttributeStr(power.combat)}</li>
        </ul>
        </div>
        
        <img src={image.url} alt="Batman" className="hero-image"></img>
        </div>
        </div>
        )
    } 
    
    export default Hero;