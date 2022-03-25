import React, {useState} from 'react'
import Cocktail from '../components/Cocktail';
import Search from '../components/Search';

import styles from './MainPage.module.css'

function MainPage() {

  const [drinksState,setDrinksState] = useState([]);
  const [isClick,setIsClick] = useState([]);
  let drinks = [];

  const getDrinks = (drinksData) => {
    drinks = [...drinksData];
    setDrinksState(drinks);
    console.log(drinks);
  }

  const clickHandler = (click) => {
    setIsClick(click);
  }

  return (
    <div className={styles.main}>
      <Search sendDrinks={getDrinks} sendClick={clickHandler} />
      {
        drinksState.map((drink) => {
          return(
            <Cocktail
              key={drink.strDrink}
              name={drink.strDrink}
              image={drink.strImageSource}
              ing1={drink.strIngredient1}
              ing2={drink.strIngredient2}
              ing3={drink.strIngredient3}
              ing4={drink.strIngredient4}
              ing5={drink.strIngredient5}
              ing6={drink.strIngredient6}
              ing7={drink.strIngredient7}
              ing8={drink.strIngredient8}
              ing9={drink.strIngredient9}
              ing10={drink.strIngredient10}
              ing11={drink.strIngredient11}
              ing12={drink.strIngredient12}
              ing13={drink.strIngredient13}
              ing14={drink.strIngredient14}
              ing15={drink.strIngredient15}
            />
          )
        })
      }

    </div>
  )
}

export default MainPage;