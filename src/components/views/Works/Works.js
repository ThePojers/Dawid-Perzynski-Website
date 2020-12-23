import React from 'react';
import styles from './Works.module.scss';


function Works() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.boxImage}>
          <a href='https://mammamia-pizzeria.herokuapp.com' target='_blanket'><div className={styles.boxOverlay}>
            <p className={styles.boxOverlayText}>DEMO</p>
          </div>
          </a>
        </div>
        <div className={styles.boxText}>
          <p className={styles.title}>About:</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Nibh venenatis cras sed felis eget velit aliquet. Risus in hendrerit gravida rutrum quisque non tellus. Morbi blandit cursus risus at ultrices.
            Ante in nibh mauris cursus. Volutpat commodo sed egestas egestas. Vestibulum sed arcu non odio</p>
          <p className={styles.title}>Tech stack:</p>
          <p>Nibh venenatis cras sed felis eget velit aliquet. Risus in hendrerit gravida rutrum quisque non tellus. Morbi blandit cursus risus at ul</p>
        </div>
      </div>

    </div>
  );
}

export default Works;