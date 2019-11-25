import React, { useState, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Characters from "./components/Characters";


const App = () => {
  const [charData, setCharData] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character")
        .then(response => {
          // console.log(response.data.results)
          setCharData(response.data.results);
        })
        .catch(error => error);
    };
    getCharacters();
  }, []);

  return (
    <Container>
      <NavLink exact to="/">
        {" "}
        <h2>Home</h2>{" "}
      </NavLink>
      <Route exact path="/" />
      <Characters charData={charData} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default App;
