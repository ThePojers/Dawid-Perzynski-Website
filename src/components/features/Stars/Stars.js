import React from 'react';
import styles from './Stars.module.scss';

function Stars() {
  return (
    <div>
      <div className={styles.night}>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
      </div>
    </div>
  );
}

export default Stars;