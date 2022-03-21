import React from 'react';
import {useState} from 'react';
import styles from './Search.module.css';

function Search() {

  const [searchbar,setSearchbar] = useState('');

  const searchbarHandler = (e) => {
    setSearchbar(e.target.value);
  }

  


  const submitHandler = (e) => {
    e.preventDefault();

    if(searchbar === '' || searchbar === null){
      alert('enter drink name');
      return;
    }

  //   , {
  //     "method": "GET",
  //     "headers": {
  //     'Content-Type': 'application/json',
  //     "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
  //     "x-rapidapi-key": "0e080c7fe2mshbaae96571089130p16a7bbjsn016819b32a15"
  //   }
  // }

//RANDOM DRINK
    // fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(response => {
    //   if(response.status !== 200){
    //     console.log('spierdolone');
    //     return;
    //   }
    //   return response.json();
    // }).then(data => {
    //   console.log(data);
    // }).catch(error => {
    //   console.error(error);
    // });

    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchbar}`).then(response => {
        if(response.status !== 200){
          console.log('spierdolone');
          return;
        }
        return response.json();
      }).then(data => {
        const resultArray = data.drinks.map(item => {
          return console.log(item.strDrink);
        })
      }).catch(error => {
        console.error(error);
      });

    setSearchbar('');
  }

  return (
    <div className={styles.search}>
        <form className={styles.search__form} onSubmit={submitHandler}>
        <input type="text" className={styles.search__searchbar} onChange={searchbarHandler} value={searchbar} />
        <button type="submit" className={styles.search__searchbtn}>Search</button>
        </form>

    </div>
        
  )
}

export default Search;