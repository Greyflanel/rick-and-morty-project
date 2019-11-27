import React from "react";
import styled from "styled-components";
import Character from "./Character"
import { Route, NavLink } from "react-router-dom";


const Characters = props => {
  return props.chars.map(c => {
    return (
      <CharCard key={c.id}>
        <Character />
        <Image src={c.image} alt="rick and morty characters" />
      </CharCard>
    );
  });
};

const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  height: auto;
`;

const CharCard = styled.div`
  text-align: center;
  word-wrap: break-word;
  width: 300px;
  height: 500px;
  margin: 2%;
  color: lime;
  border: 2px solid lime;
  border-radius: 10px;
  text-shadow: 4px 3px black;
  img:hover {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;
const H1 = styled.h1`
  color: lime;
`;

export default Characters;
