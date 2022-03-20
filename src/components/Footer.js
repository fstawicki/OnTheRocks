import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
        <h2 className={styles.footer__title}>On The Rocks</h2>
        <p className={styles.footer__author}>Created by Filip Stawicki</p>
    </footer>
  )
}

export default Footer;