import {useLocation, useParams} from 'react-router-dom';
import DrinksContext from '../context/drinks-context';

import React, { useContext, useState } from 'react'


function Details(props) {

  
  const location = useLocation();
  const allDrinks = location.allDrinks;
  const [tmp,setTmp] = useState([]);
  console.log(allDrinks);

  const [ctx] = useContext(DrinksContext);

  setTmp(ctx);
  console.log(ctx);

  // const params = useParams();

  // let data = [];
  // let drinkID = 1;

  // const drinkInfo = data.find(drink => drinkID === params.drinkID);

  // console.log(params.drinkName);

  // console.log(props.drinkName);

  return (
    <div>Details</div>
  )
}

export default Details