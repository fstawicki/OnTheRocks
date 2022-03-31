import React, { useState } from 'react'
import styles from './Cocktails.module.css';
import {Link} from 'react-router-dom';
import DrinksContext from '../context/drinks-context';
import {useContext} from 'react'


function Cocktail(props) {

  let drinkName;
  let drinkspecs = [];
  const [showDetail,setShowDetail] = useState(false);
  

  const {ctx}= useContext(DrinksContext);

  console.log(ctx)
  
      let drinksArray = [
        {ing: props.ing1, meas: props.measure1},
        {ing: props.ing2, meas: props.measure2},
        {ing: props.ing3, meas: props.measure3},
        {ing: props.ing4, meas: props.measure4},
        {ing: props.ing5, meas: props.measure5},
        {ing: props.ing6, meas: props.measure6},
        {ing: props.ing7, meas: props.measure7},
        {ing: props.ing8, meas: props.measure8},
        {ing: props.ing9, meas: props.measure9},
        {ing: props.ing10, meas: props.measure10},
        {ing: props.ing11, meas: props.measure11},
        {ing: props.ing12, meas: props.measure12},
        {ing: props.ing13, meas: props.measure13},
        {ing: props.ing14, meas: props.measure14},
        {ing: props.ing15, meas: props.measure15},
      ];


      drinksArray.map((drink) => {
        if(drink.ing === ""){
          drink.ing = null;
        }
        if(drink.meas === ""){
          drink.meas = null;
        }
        return drinksArray;
      });

      const viewDetails = (e) => {
        e.preventDefault();
        let parent = e.target.parentElement.parentElement;
        if(parent.classList.contains(`${styles.cocktail}`)){
          console.log(parent.id);
          drinkName = parent.id;
          console.log(drinkName);
        }
      }
      

  return (
    <div className={styles.cocktail} id={props.name}>
      <div className={styles.cocktail__image} style={{
        backgroundImage: `url(${props.image})`
      }}>
      </div>
      <div className={styles.cocktail__info}>
        <h2  id={props.name} className={styles.cocktail__title}>{props.name}</h2>
        <h2 className={styles.cocktail__infotitle}>Ingredients:</h2>
        <ul className={styles.cocktail__ingredients}>{
          drinksArray.map((drink) => {
            if(drink.ing !== null){
              return <li>{drink.ing}<span className={styles.cocktail__ingredients__measure}>{drink.meas}</span></li>
            }
          })
        }
        </ul>
      </div>
      <div className={styles.cocktail__btndiv}>
        {/* <button onClick={viewDetails} className={styles.cocktail__detailsbtn}>Details</button> */}
        <Link 
        onClick={viewDetails}
        className={styles.cocktail__detailsbtn}
        to={{
          pathname: "/Details/1",
          allDrinks: props.array
        }}
        >Details</Link>
      </div>
    </div>
  )
}



export default Cocktail;


// let ingredients = 
// [props.ing1, 
//   props.ing2, 
//   props.ing3, 
//   props.ing4, 
//   props.ing5, 
//   props.ing6, 
//   props.ing7, 
//   props.ing8, 
//   props.ing9, 
//   props.ing10, 
//   props.ing11, 
//   props.ing12, 
//   props.ing13, 
//   props.ing14,
//   props.ing15];

//   let measures = 
//   [props.measure1, 
//     props.measure2, 
//     props.measure3, 
//     props.measure4, 
//     props.measure5, 
//     props.measure6, 
//     props.measure7, 
//     props.measure8, 
//     props.measure9, 
//     props.measure10, 
//     props.measure11, 
//     props.measure12, 
//     props.measure13, 
//     props.measure14,
//     props.measure15];