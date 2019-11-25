import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Character = props => {
    const [char, setChar] = useState([]);
    console.log(props)
    useEffect(() => {
        const id = props.match.params.id;
          axios
            .get(`https://rickandmortyapi.com/api/character${id}`)
            .then(response => {
               console.log(response.data.results)
              setChar(response.data.results);
            })
            .catch(error => error);
        
      }, []);
return (
<div>
{char.name}

</div>
)
}

export default Character;