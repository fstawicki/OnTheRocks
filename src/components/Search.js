import React, { Fragment } from 'react';
import {useState} from 'react';
import styles from './Search.module.css';

function Search(props) {

  const [searchbar,setSearchbar] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  


  const searchbarHandler = (e) => {
    setSearchbar(e.target.value);
  }

  const buttonHandler = () => {
    setIsClicked(true);
  }



  async function submitHandler(e){
    e.preventDefault();
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchbar}`);
    if(response.status !== 200){
      console.log('nie');
      return;
    }
      const data = await response.json();
      let drinksArray = data.drinks;
      
      props.sendClick(isClicked);
      props.sendDrinks(drinksArray);
      
  }


  return (
    <Fragment>
    <div className={styles.search}>
        <form className={styles.search__form} onSubmit={submitHandler}>
        <input type="text" className={styles.search__searchbar} onChange={searchbarHandler} value={searchbar} />
        <button type="submit" className={styles.search__searchbtn} onClick={buttonHandler}>Search</button>
        </form>
        {isLoading && <div className={styles.search__loadingText}><p>Searching, please wait...</p></div>}

    </div>
    
    </Fragment>
  )
}

export default Search;



  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if(searchbar === '' || searchbar === null){
  //     alert('enter drink name');
  //     return;
  //   }
    
  //   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchbar}`).then(response => {
  //       if(response.status !== 200){
  //         console.log('spierdolone');
  //         return;
  //       }
  //       return response.json();
  //     }).then(data => {
  //       const resultArray = data.drinks.map(item => {
  //         // return console.log(item.strDrink);
  //         return setDrinks({
  //           key: item.strDrink,
  //           name: item.strDrink,
  //           image: item.strDrinkThumb,
  //           category: item.strCategory,
  //           glass: item.strGlass,
  //           ing1: item.strIngredient1,
  //           ing2: item.strIngredient2,
  //           ing3: item.strIngredient3,
  //           ing4: item.strIngredient4,
  //           ing5: item.strIngredient5,
  //           ing6: item.strIngredient6,
  //           ing7: item.strIngredient7,
  //           ing8: item.strIngredient8,
  //           ing9: item.strIngredient9,
  //           ing10: item.strIngredient10,
  //           ing11: item.strIngredient11,
  //           ing12: item.strIngredient12,
  //           ing13: item.strIngredient13,
  //           ing14: item.strIngredient14,
  //           ing15: item.strIngredient15,
  //           instruction: item.strInstructions,
  //           measure1: item.strMeasure1,
  //           measure2: item.strMeasure2,
  //           measure3: item.strMeasure3,
  //           measure4: item.strMeasure4,
  //           measure5: item.strMeasure5,
  //           measure6: item.strMeasure6,
  //           measure7: item.strMeasure7,
  //           measure8: item.strMeasure8,
  //           measure9: item.strMeasure9,
  //           measure10: item.strMeasure10,
  //           measure11: item.strMeasure11,
  //           measure12: item.strMeasure12,
  //           measure13: item.strMeasure13,
  //           measure14: item.strMeasure14,
  //           measure15: item.strMeasure15,
  //         })
  //       })
  //     }).catch(error => {
  //       console.error(error);
  //     });

  //     console.log(drinks);
  //     setIsLoading(false);

  //   setSearchbar('');
    
  // }