import React from 'react'
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}></div>
    </nav>
  )
}

export default Navbar