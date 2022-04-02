import React, { useState } from 'react'
import styles from './Cocktails.module.css';
import {Link} from 'react-router-dom';
import DrinksContext from '../context/drinks-context';
import {useContext} from 'react'


function Cocktail(props) {

  let drinkName;
  const [showDetail,setShowDetail] = useState(false);
  const [allDrinks,setAllDrinks] = useState([]);

  const [ctx] = useContext(DrinksContext);

  let tmpArr = [];
  ctx.map((drink) => {
    return console.log(drink.strIngredient1);

  })
  
    
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
        <button onClick={viewDetails} className={styles.cocktail__detailsbtn}>Details</button>
      </div>
    </div>
  )
}




























// import React, { useState } from 'react'
// import styles from './Cocktails.module.css';
// import {Link} from 'react-router-dom';
// import DrinksContext from '../context/drinks-context';
// import {useContext} from 'react'


// function Cocktail(props) {

//   let drinkName;
//   const [showDetail,setShowDetail] = useState(false);
//   const [allDrinks,setAllDrinks] = useState([]);

  
//       let drinksArray = [
//         {ing: props.ing1, meas: props.measure1},
//         {ing: props.ing2, meas: props.measure2},
//         {ing: props.ing3, meas: props.measure3},
//         {ing: props.ing4, meas: props.measure4},
//         {ing: props.ing5, meas: props.measure5},
//         {ing: props.ing6, meas: props.measure6},
//         {ing: props.ing7, meas: props.measure7},
//         {ing: props.ing8, meas: props.measure8},
//         {ing: props.ing9, meas: props.measure9},
//         {ing: props.ing10, meas: props.measure10},
//         {ing: props.ing11, meas: props.measure11},
//         {ing: props.ing12, meas: props.measure12},
//         {ing: props.ing13, meas: props.measure13},
//         {ing: props.ing14, meas: props.measure14},
//         {ing: props.ing15, meas: props.measure15},
//       ];


//       drinksArray.map((drink) => {
//         if(drink.ing === ""){
//           drink.ing = null;
//         }
//         if(drink.meas === ""){
//           drink.meas = null;
//         }
//         return drinksArray;
//       });

//       const viewDetails = (e) => {
//         e.preventDefault();
//         let parent = e.target.parentElement.parentElement;
//         if(parent.classList.contains(`${styles.cocktail}`)){
//           drinkName = parent.id;
//           console.log(drinkName);
//           setShowDetail(true);
//           props.sendDetail(drinkName);
//         }
//       }

//   return (
//     <div className={styles.cocktail} id={props.name}>
//       <div className={styles.cocktail__image} style={{
//         backgroundImage: `url(${props.image})`
//       }}>
//       </div>
//       <div className={styles.cocktail__info}>
//         <h2  id={props.name} className={styles.cocktail__title}>{props.name}</h2>
//         <h2 className={styles.cocktail__infotitle}>Ingredients:</h2>
//         <ul className={styles.cocktail__ingredients}>{
//           drinksArray.map((drink) => {
//             if(drink.ing !== null){
//               return <li>{drink.ing}<span className={styles.cocktail__ingredients__measure}>{drink.meas}</span></li>
//             }
//           })
//         }
//         </ul>
//       </div>
//       <div className={styles.cocktail__btndiv}>
//         <button onClick={viewDetails} className={styles.cocktail__detailsbtn}>Details</button>
//       </div>
//     </div>
//   )
// }



export default Cocktail;
