import React from 'react'
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src="../images/logo" alt="logo" className={styles.navbar__logo} />
      {/* <h1 className={styles.navbar__title}>On The Rocks</h1> */}
      {/* <ul className={styles.navbar__links}>
        <li className={styles.navbar__links__link}></li>
      </ul> */}
    </nav>
  )
}

export default Navbar