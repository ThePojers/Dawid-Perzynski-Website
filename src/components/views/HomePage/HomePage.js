import React from 'react';
import styles from './HomePage.module.scss';
import Stars from '../../features/Stars/Stars';
import HomePageImages from  '../../features/HomePageImages/HomePageImages';

const Homepage = () => {

  return (
    <div className={styles.container}>
      <HomePageImages />
      <Stars></Stars>
    </div>
  );};

export default Homepage;
