import React, { useState, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import styled from 'styled-components'
import axios from "axios";
import Characters from "./components/Characters"

const App = () => {
const [charData, setCharData] = useState([]);
    
    useEffect(() => {
        const getCharacters = () => {
            axios
            .get("https://rickandmortyapi.com/api/character")
            .then(response => {
                setCharData(response.data.results)
                
            })
            .catch(error => console.log(error));
        };
        getCharacters();
    }, [])
console.log(charData)
    return (
        <CardContainer>
        <NavLink to="/">Home</NavLink>
        <Route exact path="/" />
        <Characters chars={charData}/> 
        </CardContainer>
    )
};

const CardContainer = styled.div`
 display: flex;
flex-wrap: wrap;

 `

export default App;