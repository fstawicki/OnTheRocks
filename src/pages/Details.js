import {useParams} from 'react-router-dom';

import React from 'react'


function Details(props) {

  
  // const params = useParams();

  // let data = [];
  // let drinkID = 1;

  // const drinkInfo = data.find(drink => drinkID === params.drinkID);

  // console.log(params.drinkName);

  console.log(props.drinkName);

  return (
    <div>Details</div>
  )
}

export default Details