import React from 'react';
import styles from './Alert.module.css';

function Alert(props) {
  return (
      <div className={styles.alert}>
          <h2 className={styles.alert__msg}>{props.msg}</h2>
      </div>
    
  )
}

export default Alert