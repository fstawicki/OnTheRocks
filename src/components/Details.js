import {useLocation, useParams} from 'react-router-dom';
import DrinksContext from '../context/drinks-context';

import styles from './Details.module.css'

import React, { useContext, useState } from 'react'


function Details(props) {

  const [ctx,setCtx] = useContext(DrinksContext);

  let selectedDrink = {};
  ctx.map((drink) => {
      if(drink.strDrink === props.name){
       return selectedDrink = {
          key: drink.idDrink,
          name: drink.strDrink,
          category: drink.strCategory,
          isalcoholic: drink.strAlcoholic,
          image: drink.strDrinkThumb,
          instruction: drink.strInstructions,
          glass: drink.strGlass,
          ingredients: [
            {ing: drink.strIngredient1, mea: drink.strMeasure1},
            {ing: drink.strIngredient2, mea: drink.strMeasure2},
            {ing: drink.strIngredient3, mea: drink.strMeasure3},
            {ing: drink.strIngredient4, mea: drink.strMeasure4},
            {ing: drink.strIngredient5, mea: drink.strMeasure5},
            {ing: drink.strIngredient6, mea: drink.strMeasure6},
            {ing: drink.strIngredient7, mea: drink.strMeasure7},
            {ing: drink.strIngredient8, mea: drink.strMeasure8},
            {ing: drink.strIngredient9, mea: drink.strMeasure9},
            {ing: drink.strIngredient10, mea: drink.strMeasure10},
            {ing: drink.strIngredient11, mea: drink.strMeasure11},
            {ing: drink.strIngredient12, mea: drink.strMeasure12},
            {ing: drink.strIngredient13, mea: drink.strMeasure13},
            {ing: drink.strIngredient14, mea: drink.strMeasure14},
            {ing: drink.strIngredient15, mea: drink.strMeasure15}],
            
          // ingredients: [
          //   drink.strIngredient1,drink.strIngredient2,drink.strIngredient3,drink.strIngredient4,drink.strIngredient5,drink.strIngredient6,drink.strIngredient7,drink.strIngredient8,drink.strIngredient9,drink.strIngredient10,drink.strIngredient11,drink.strIngredient12,drink.strIngredient13,drink.strIngredient14,drink.strIngredient15],
          // measures: [drink.strMeasure1,drink.strMeasure2,drink.strMeasure3,drink.strMeasure4,drink.strMeasure5,drink.strMeasure6,drink.strMeasure7,drink.strMeasure8,drink.strMeasure9,drink.strMeasure10,drink.strMeasure11,drink.strMeasure12,drink.strMeasure13,drink.strMeasure14,drink.strMeasure15],
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
        }
      }
  });

  const goBack = () => {
    
    
    setCtx([]);
    props.goBack('')
  }
  

  return (
    <div>
      <div className={styles.details__button}>
        <button onClick={goBack}>Go back</button>
      </div>
      <div className={styles.details__name}>
        <h1>{selectedDrink.name}</h1>
      </div>
      <div className={styles.details__image} style={{
        backgroundImage: `url(${selectedDrink.image})`
      }}>
        </div>
      <div className={styles.details__flex}>
        <div className={styles.details__flex__left}>
          <h2 className={styles.details__flex__left__heading}>Ingredients:</h2>
          <ul>
            {selectedDrink.ingredients.map((ingredient) => {
              if(ingredient.ing != null || ingredient.mea != null){
                return <li key={Math.random() * (100 - 1) + 1}><span className={styles.details__spanleft}>{ingredient.ing}</span>{ingredient.mea}</li>
              }
            })}

          </ul>
        </div>
        <div className={styles.details__flex__right}>
          <ul>
            <li><span className={styles.details__spanleft}>Category:</span>{selectedDrink.category}</li>
            <li><span className={styles.details__spanleft}>Alcoholic/Non-Alcoholic:</span>{selectedDrink.isalcoholic}</li>
            <li><span className={styles.details__spanleft}>Preferable glass:</span>{selectedDrink.glass}</li>
          </ul>
        </div>
        <div className={styles.details__instructions}>
          <p>
            {selectedDrink.instruction}
          </p>
        </div>
      </div>
    </div>
    
    )
}

export default Details










// ing1: drink.strIngredient1,
// ing2: drink.strIngredient2,
// ing3: drink.strIngredient3,
// ing4: drink.strIngredient4,
// ing5: drink.strIngredient5,
// ing6: drink.strIngredient6,
// ing7: drink.strIngredient7,
// ing8: drink.strIngredient8,
// ing9: drink.strIngredient9,
// ing10: drink.strIngredient10,
// ing11: drink.strIngredient11,
// ing12: drink.strIngredient12,
// ing13: drink.strIngredient13,
// ing14: drink.strIngredient14,
// ing15: drink.strIngredient15,
// mea1: drink.strMeasure1,
// mea2: drink.strMeasure2,
// mea3: drink.strMeasure3,
// mea4: drink.strMeasure4,
// mea5: drink.strMeasure5,
// mea6: drink.strMeasure6,
// mea7: drink.strMeasure7,
// mea8: drink.strMeasure8,
// mea9: drink.strMeasure9,
// mea10: drink.strMeasure10,
// mea11: drink.strMeasure11,
// mea12: drink.strMeasure12,
// mea13: drink.strMeasure13,
// mea14: drink.strMeasure14,
// mea15: drink.strMeasure15,