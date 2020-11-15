import React from 'react';
import styles from './Stars.module.scss';

function Stars() {
  return (
    <>
      <div className={styles.night}>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
      </div>
    </>
  );
}

export default Stars;