import React from 'react'
import styles from './Cocktails.module.css';
import {Link} from 'react-router-dom';




function Cocktail(props) {

  let ingredients = `${props.ing1}, ${props.ing2}, ${props.ing3}, ${props.ing4}, ${props.ing5}, ${props.ing6}, ${props.ing7}, ${props.ing8}, ${props.ing9}, ${props.ing10}, ${props.ing11}, ${props.ing12}, ${props.ing13}, ${props.ing14}, ${props.ing15}`;

  return (
    <div className={styles.cocktail}>
      <img className={styles.cocktail__image} src={props.image}alt={props.name} />
        <h2 className={styles.cocktail__title}>{props.name}</h2>
        <p className={styles.cocktail__ingredients}>{ingredients}</p>
        <Link className={styles.cocktail__detailsbtn}>Details</Link>
    </div>
  )
}



export default Cocktail;

