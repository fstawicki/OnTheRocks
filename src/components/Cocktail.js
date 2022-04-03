import React, { Fragment, useState } from 'react'
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
    return(
      tmpArr.push({
        key: drink.idDrink,
        name: drink.strDrink,
        image: drink.strDrinkThumb,
        instruction: drink.strInstructions,
        glass: drink.strGlass,
        ing1: drink.strIngredient1,
        ing2: drink.strIngredient2,
        ing3: drink.strIngredient3,
        ing4: drink.strIngredient4,
        ing5: drink.strIngredient5,
        ing6: drink.strIngredient6,
        ing7: drink.strIngredient7,
        ing8: drink.strIngredient8,
        ing9: drink.strIngredient9,
        ing10: drink.strIngredient10,
        ing11: drink.strIngredient11,
        ing12: drink.strIngredient12,
        ing13: drink.strIngredient13,
        ing14: drink.strIngredient14,
        ing15: drink.strIngredient15,
        mea1: drink.strMeasure1,
        mea2: drink.strMeasure2,
        mea3: drink.strMeasure3,
        mea4: drink.strMeasure4,
        mea5: drink.strMeasure5,
        mea6: drink.strMeasure6,
        mea7: drink.strMeasure7,
        mea8: drink.strMeasure8,
        mea9: drink.strMeasure9,
        mea10: drink.strMeasure10,
        mea11: drink.strMeasure11,
        mea12: drink.strMeasure12,
        mea13: drink.strMeasure13,
        mea14: drink.strMeasure14,
        mea15: drink.strMeasure15,
      })
    )

  });

  console.log(tmpArr);


  const viewDetails = () => {

  }
  
    
  return (
    <Fragment>
    {
      tmpArr.map((drink) => {
        <div className={styles.cocktail} id={drink.name}>
        <div className={styles.cocktail__image} style={{
          backgroundImage: `url(${drink.image})`
        }}>
        </div>
        <div className={styles.cocktail__info}>
          <h2  id={drink.name} className={styles.cocktail__title}>{drink.name}</h2>
          <h2 className={styles.cocktail__infotitle}>Ingredients:</h2>
          <ul className={styles.cocktail__ingredients}>
            {/* {
            tmpArr.map((drink) => {
              if(drink.ing !== null){
                return <li>{drink.ing}<span className={styles.cocktail__ingredients__measure}>{drink.meas}</span></li>
              }
            })
          } */}
          </ul>
        </div>
        <div className={styles.cocktail__btndiv}>
          <button onClick={viewDetails} className={styles.cocktail__detailsbtn}>Details</button>
        </div>
      </div>
        
      })
    }


    </Fragment>
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
