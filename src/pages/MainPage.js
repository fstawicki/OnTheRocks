import React, {Fragment, useContext, useState} from 'react'
import DrinksContext from '../context/drinks-context';
import Cocktail from '../components/Cocktail';

import styles from './MainPage.module.css'
import Details from '../components/Details';
import Alert from '../components/Alert';

function MainPage(props) {

  const [viewDetails,setViewDetails] = useState('');
  const [show,setShow] = useState(false);

  const [ctx, setCtx] = useContext(DrinksContext);

  const getDetail = (drinkName) => {
    setViewDetails(drinkName);
  }
  
  const getBack = (quitDetails) => {
    setViewDetails(quitDetails);
    setShow(false);
  }

  return (
    <Fragment>
      
    {!show ? 
    
    <div className={styles.main}>

{/*      
      {noShow && alert('no drinks with that name. Please, enter another name')} */}
      {viewDetails === '' ?
        (
        ctx.map((drink) => {
        return(
          <Cocktail
            viewDetails={getDetail}
            key={drink.strDrink}
            name={drink.strDrink}
            image={drink.strImageSource}
            isAlcoholic={drink.strAlcoholic}
            category={drink.strCategory}
            glass={drink.strGlass}
            instruction={drink.strInstructions}
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
            measure1={drink.strMeasure1}
            measure2={drink.strMeasure2}
            measure3={drink.strMeasure3}
            measure4={drink.strMeasure4}
            measure5={drink.strMeasure5}
            measure6={drink.strMeasure6}
            measure7={drink.strMeasure7}
            measure8={drink.strMeasure8}
            measure9={drink.srrMeasure9}
            measure10={drink.strMeasure10}
            measure11={drink.strMeasure11}
            measure12={drink.strMeasure12}
            measure13={drink.strMeasure13}
            measure14={drink.strMeasure14}
            measure15={drink.strMeasure15}
          />
        )
      }))
    
      : <Details goBack={getBack} name={viewDetails} />}
    

    </div>
    : <Alert msg='No drinks for this search. Please enter other drink name' />}
    </Fragment>
  )
}

export default MainPage;