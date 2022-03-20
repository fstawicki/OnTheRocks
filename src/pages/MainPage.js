import React from 'react'
import Cocktail from '../components/Cocktail';
import Search from '../components/Search';

import styles from './MainPage.module.css'

function MainPage() {
  return (
    <div className={styles.main}>
      <Search />
      <Cocktail />
      <Cocktail />
      <Cocktail />
    </div>
  )
}

export default MainPage;