import React, { NavLink, Route } from 'react';
import styled from 'styled-components';


const Characters = (props) => {
  console.log(props)
 return (
 <CardContainer>
{props.charData.map(char => 
  <NavLink to="/character/:id" >
<CharCard key={char.id}>
<h1>{char.name}</h1>
 <span>Species: {char.species}</span>
 <span>Current Location: {char.location.name} <br/></span>
 <span>Origin:  {char.origin.name}</span>
 <h5>{char.status}</h5> <br/>
  <Image src={char.image} alt="rick and morty character"/>
  </CharCard>
  </NavLink>
)}; 
<Route />
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
