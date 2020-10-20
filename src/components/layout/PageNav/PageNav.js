import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';

const PageNav = () => (

  <nav className={styles.component}>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/AboutMe`} activeClassName='active'>AboutMe</NavLink>
  </nav>

);

export default PageNav;
