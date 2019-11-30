
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Character = (props) => {
const [singleChar, setSingleChar] = useState([])

useEffect(() => {
  const id = props.match.params.id
  axios
  .get(`https://rickandmortyapi.com/api/character/${id}`)
  .then(response => {
    setSingleChar(response.data)
  })
  .catch(error => error.response)
}, [props.match.params.id])
console.log(singleChar.status)
  return (
  <Char>
<H1>{singleChar.name}</H1>
<h2>{singleChar.status}</h2>
<Image src={singleChar.image} alt="Rick and Morty characters"/>
  </Char>
  )
}



const Char = styled.div`
text-align: center;
width: 95%;
color: lime;
 `
const Image = styled.img`
width: 30%;
height: auto;
`
const H1 = styled.h1`
font-size: 3rem;
`
export default Character;
