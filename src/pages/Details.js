import {useParams} from 'react-router-dom';

import React from 'react'


function Details() {

  
  const params = useParams();

  console.log(params.drinkName);

  return (
    <div>Details</div>
  )
}

export default Details