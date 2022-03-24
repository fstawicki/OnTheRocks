import React from 'react'
import styles from './Cocktails.module.css';
import {Link} from 'react-router-dom';
import image from '../images/pobrane.jpg'




function Cocktail(props) {
  return (
    <div className={styles.cocktail}>
      <img className={styles.cocktail__image} src={image}alt="negroni" />
        <h2 className={styles.cocktail__title}>Negroni</h2>
        <p className={styles.cocktail__ingredients}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quaerat totam ratione libero labore, illo quas fugit quibusdam quia rem.</p>
        <Link className={styles.cocktail__detailsbtn}>Details</Link>
    </div>
  )
}



export default Cocktail;

