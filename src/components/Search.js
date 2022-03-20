import React from 'react';
import styles from './Search.module.css';

function Search() {
  return (
    <div className={styles.search}>
        <form className={styles.search__form}>
        <input type="text" className={styles.search__searchbar} />
        <button type="submit" className={styles.search__searchbtn}>Search</button>
        </form>

    </div>
        
  )
}

export default Search;