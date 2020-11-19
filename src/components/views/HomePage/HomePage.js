import React from 'react';
import styles from './HomePage.module.scss';
import Stars from '../../features/Stars/Stars';
import HomePageImages from  '../../features/HomePageImages/HomePageImages';
import HomeText from  '../../features/HomeText/HomeText';

const Homepage = () => {

  return (
    <div className={styles.container}>
      <HomeText />
      <HomePageImages />
      <Stars></Stars>
    </div>
  );};

export default Homepage;
