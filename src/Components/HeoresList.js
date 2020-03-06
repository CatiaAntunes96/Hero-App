import React, {useEffect, useState} from "react";
import Form from "./Form";
import Hero from "./Hero";
import Loader from "react-loader-spinner";

const HeroesList = () => {
    const TOKEN = "3175775405768422";
    
    const [heroesList, setHeroesList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [search, setSearch] = useState("")
    
    const [loading, setLoading] = useState(false);
    
    const getHero = async () => {
        if(!search) 
        return;
        
        setLoading(true)
        
        //Add https://cors-anywhere.herokuapp.com/ to avoid cross origins problem
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${TOKEN}/search/${search}`)
        const data = await response.json();
        
        if(data.response === "error") {
            alert("Not found, try again!");
            setLoading(false)
            setHeroesList([])
            return;
        }
        
        setHeroesList(data.results); 
        
        setLoading(false)
    }
    
    useEffect(() => {
        getHero();
    }, [search]);
    
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    
    useEffect(() => {
        if (inputValue.includes(" ")) {
            setSearch(inputValue.replace(" ", "%20"))
        }
        if (inputValue.includes("-")) {
            setSearch(inputValue.replace("-", "%2D"))
        }
    }, [search])
    
    const getSearch = (e) => {
        e.preventDefault();
        setSearch(inputValue.toLowerCase());
        setInputValue("");
    }
    
    return (
          
        <div className="render-page">
        <Form 
        submit={getSearch}
        handleChange={handleChange}
        input={inputValue}
        />  
        
        {loading ? (
            <div>
            
            <Loader type="ThreeDots" color="white" height={60} width={90} className="loading"/>
            </div>
            
            ) : (
                <div>
                {heroesList.map(hero =>(
                    <Hero 
                    key={hero.id}
                    title={hero.name}
                    power={hero.powerstats}
                    name={hero.biography}
                    appearance={hero.appearance}
                    image={hero.image}
                    />
                    
                    ))}
                    </div>
                    )}
                    
                    
                    
                    </div>
                    )
                }
                
                export default HeroesList;