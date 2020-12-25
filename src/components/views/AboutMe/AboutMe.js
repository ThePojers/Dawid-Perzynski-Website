import React from 'react';
import styles from './AboutMe.module.scss';

function AboutMe() {
  return (

    <div className={styles.container}>
      <div className={`${styles.box} ${styles.first}`}>
        <div className={styles.boxText}>
          <p className={styles.title}>My journey:</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Nibh venenatis cras sed felis eget velit aliquet. Risus in hendrerit gravida rutrum quisque non tellus. Morbi blandit cursus risus at ultrices.
              Ante in nibh mauris cursus. Volutpat commodo sed egestas egestas. Vestibulum sed arcu non odio</p>
        </div>
      </div>
      <div className={`${styles.box} ${styles.first}`}>
        <div className={styles.boxText}>
          <p className={styles.title}>Skill set:</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Nibh venenatis cras sed felis eget velit aliquet. Risus in hendrerit gravida rutrum quisque non tellus. Morbi blandit cursus risus at ultrices.
              Ante in nibh mauris cursus. Volutpat commodo sed egestas egestas. Vestibulum sed arcu non odio</p>
        </div>
      </div>
      <div className={`${styles.box} ${styles.second}`}>
        <div className={styles.boxText}>
          <p className={styles.title}>Passion:</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Nibh venenatis cras sed felis eget velit aliquet. Risus in hendrerit gravida rutrum quisque non tellus. Morbi blandit cursus risus at ultrices.
              Ante in nibh mauris cursus. Volutpat commodo sed egestas egestas. Vestibulum sed arcu non odioLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Nibh venenatis cras sed felis eget velit aliquet. Risus in hendrerit gravida rutrum quisque non tellus. Morbi blandit cursus risus at ultrices.
              Ante in nibh mauris cursus. Volutpat commodo sed egestas egestas. Vestibulum sed arcu non odio</p>
        </div>
      </div>
    </div>

  );
}

export default AboutMe;