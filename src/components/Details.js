import DrinksContext from '../context/drinks-context';
import styles from './Details.module.css'
import React, { useContext} from 'react'


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
            {ing: drink.strIngredient15, mea: drink.strMeasure15}]
        }
      }
  });

//removes unwanted empty ingredients from object
  selectedDrink.ingredients.map((ingredient) => {
    if(ingredient.ing === ""){
      ingredient.ing = null;
      ingredient.mea = null;
    }
  });

  const goBack = () => {
    let quitDetails = '';
    // setCtx([]);
    props.goBack(quitDetails);
  }
  

  return (
    <div className={styles.details}>
      <div className={styles.details__button}>
        <button onClick={goBack}>Go back</button>
      </div>
      <div className={styles.details__name}>
        <h1>{selectedDrink.name}</h1>
      </div>
      <div className={styles.details__image} style={{backgroundImage: `url(${selectedDrink.image})`}}></div>
      <div className={styles.details__flex}>
        <div className={styles.details__flex__left}>
          <h2 className={styles.details__flex__heading}>Ingredients:</h2>
          <ul className={styles.list}>
            {selectedDrink.ingredients.map((ingredient) => {
              if(ingredient.ing != null || ingredient.mea != null){
                return <li className={styles.list_item} key={Math.random() * (100 - 1) + 1}><span className={styles.details__spanleft}>{ingredient.ing}</span><span className={styles.details__spanright}>{ingredient.mea}</span></li>
              }})}
          </ul>
        </div>
        <div className={styles.details__flex__right}>
          <h2 className={styles.details__flex__heading}>Basic Information:</h2>
          <ul className={styles.list}>
            <li className={styles.list_item}><span className={styles.details__spanleft}>Category:</span><span className={styles.details__spanright}>{selectedDrink.category}</span></li>
            <li className={styles.list_item}><span className={styles.details__spanleft}>Alcoholic / Non-Alcoholic:</span><span className={styles.details__spanright}>{selectedDrink.isalcoholic}</span></li>
            <li className={styles.list_item}><span className={styles.details__spanleft}>Preferable glass:</span><span className={styles.details__spanright}>{selectedDrink.glass}</span></li>
          </ul>
        </div>
      </div>
      <div className={styles.details__instructions}>
          <h2 className={styles.details__flex__heading}>Instruction:</h2>
          <p className={styles.details__instructions__para}>{selectedDrink.instruction}</p>
        </div>
    </div>
    
    )
}

export default Details;

