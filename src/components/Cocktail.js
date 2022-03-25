import React from 'react'
import styles from './Cocktails.module.css';
import {Link} from 'react-router-dom';


function Cocktail(props) {

  let imageStyle = `backgroundImage: url(${props.image})`;

  let ingredients = 
  [props.ing1, 
    props.ing2, 
    props.ing3, 
    props.ing4, 
    props.ing5, 
    props.ing6, 
    props.ing7, 
    props.ing8, 
    props.ing9, 
    props.ing10, 
    props.ing11, 
    props.ing12, 
    props.ing13, 
    props.ing14,
    props.ing15];

    let measures = 
    [props.measure1, 
      props.measure2, 
      props.measure3, 
      props.measure4, 
      props.measure5, 
      props.measure6, 
      props.measure7, 
      props.measure8, 
      props.measure9, 
      props.measure10, 
      props.measure11, 
      props.measure12, 
      props.measure13, 
      props.measure14,
      props.measure15];


  return (
    <div className={styles.cocktail}>
      <div className={styles.cocktail__image} style={{
        backgroundImage: `url(${props.image})`
      }}>
      </div>
      <div className={styles.cocktail__info}>
        <h2 className={styles.cocktail__title}>{props.name}</h2>
        <h2 className={styles.cocktail__infotitle}>Ingredients:</h2>
        <ul className={styles.cocktail__ingredients}>{
          ingredients.map((ing) => {
            if(ing !== null){
              return <li>{ing}</li>
            }
          })
        }
        </ul>
      </div>
      <div className={styles.cocktail__btndiv}>
        <Link className={styles.cocktail__detailsbtn}>Details</Link>
      </div>
    </div>
  )
}



export default Cocktail;

