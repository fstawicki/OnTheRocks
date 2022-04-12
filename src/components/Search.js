import React, { useState, Fragment, useContext } from 'react';
import Alert from './Alert';

import DrinksContext from '../context/drinks-context';
import styles from './Search.module.css';

function Search(props) {

  const [searchbar,setSearchbar] = useState('');
  const [isTouched, setIsTouched] = useState('');
  
  const [ctx, setCtx] = useContext(DrinksContext);

  const searchbarHandler = (e) => {
    setSearchbar(e.target.value);
    setIsTouched('');
  }

  async function submitHandler(e){
    e.preventDefault();
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchbar}`;
    if(searchbar === ''){
      setIsTouched('Please enter a drink name');
      return;
    }
    
    const response = await fetch(URL);
    if(response.status !== 200){
      console.log('status not ok');
      return;
    }
      const data = await response.json();
      if(data.drinks === null){
        setIsTouched('No drinks for this search. Please enter other drink name');
        setSearchbar('');
        return;
      }
      let drinksArray = data.drinks;
    if(drinksArray){
      setCtx(drinksArray);
      setIsTouched('');

  }
}
      
  const submitHandlerRandom = async (e) => {
    e.preventDefault();
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const response = await fetch(URL);
    if(response.status !== 200){
      console.log('status not ok');
      return;
    }
    const data = await response.json();
    let drinksArray = data.drinks;
    setCtx(drinksArray);
    setIsTouched('');
  }


  return (
    <Fragment>
    <div className={styles.search}>
        <form className={styles.search__form} onSubmit={submitHandler}>
        <input type="text" className={styles.search__searchbar} onChange={searchbarHandler} value={searchbar} />
        <button type="submit" className={styles.search__searchbtn}>Search</button>
        </form>
    </div>
    <div className={styles.search}>
    <form className={styles.search__form} onSubmit={submitHandlerRandom}>
      <button type="submit" className={styles.search__searchbtn}>Random Cocktail</button>
    </form>
    </div>
    {!isTouched == '' && <Alert msg={isTouched} />}
    </Fragment>
  )
}

export default Search;