import React from 'react';
import {  NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Characters = (props) => { 

return <CardContainer>
Rick and Morty Characters
{props.chars.map(char => <NavLink to={`/character/${char.id}`}
key={char.id} >
<CharCard>
<h2>{char.name}</h2>
<h3>{char.status}</h3>
<img src={char.image} alt=""/>
</CharCard>
</NavLink>
)}


</CardContainer>
}

 const CardContainer = styled.div`
   display: flex;
   flex-wrap: wrap;

   
 `;


const CharCard = styled.div`
   text-align: center;
   word-wrap: break-word;
   width: 350px;
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

export default Characters;