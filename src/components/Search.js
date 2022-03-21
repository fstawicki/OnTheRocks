import React from 'react';
import {useState} from 'react';
import styles from './Search.module.css';

function Search() {

  const [searchbar,setSearchbar] = useState('');

  const searchbarHandler = (e) => {
    setSearchbar(e.target.value);
    console.log(searchbar)
  }


  const submitHandler = (e) => {
    e.preventDefault();


    console.log(searchbar);
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