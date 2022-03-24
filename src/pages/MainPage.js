import React, {useState} from 'react'
import Cocktail from '../components/Cocktail';
import Search from '../components/Search';

import styles from './MainPage.module.css'

function MainPage() {

  const getDrinks = (drinksData) => {
    const drinks = [...drinksData];
    console.log(drinks);
  }

  return (
    <div className={styles.main}>
      <Search sendDrinks={getDrinks} />
      <Cocktail />
      <Cocktail />
      <Cocktail />
    </div>
  )
}

export default MainPage;