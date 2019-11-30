import React, { useState, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import Characters from "./components/Characters";
import Character from "./components/Character";
import axios from "axios";
// import styled from "styled-components";

const App = () => {
  const [charData, setCharData] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character")
        .then(response => {
          setCharData(response.data.results);
        })
        .catch(error => error.response);
    };
    getCharacters();
  }, []);
  
  return (
    <div>
      <h1>Rick and Morty</h1>

      <NavLink exact to="/">
        Home
      </NavLink>
      <Route exact path="/" render={props => <Characters  chars={charData} />} />
      <Route path="/character/:id" render={props => <Character {...props} />} />
    </div>
  );
};

export default App;
