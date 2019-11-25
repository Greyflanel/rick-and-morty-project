import React, { NavLink, Route } from 'react';
import styled from 'styled-components';
import Character from './Character'

const Characters = (props) => {
console.log(props)

  
 return (
   <CardContainer>
     {props.charData.map(char => <CharCard key={char.id}>
      
 
      
  </CharCard>
  )}
  </CardContainer>
  )
} 

const CardContainer = styled.div`
 display: flex;
flex-wrap: wrap;
 `

const Image = styled.img`
border-radius: 10px;
width: 100%;
height: auto;
`

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
` 
      
        
export default Characters;

