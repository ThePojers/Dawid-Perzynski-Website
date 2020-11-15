import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';

const PageNav = () => (

  <nav className={styles.component}>
    <Grid fluid>
      <Row>
        <Col xs className={styles.name}>
          <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' className={styles.marg}><span>Dawid Perzynski</span></NavLink>
        </Col>
        <Col xs className={styles.aboutMe}>
          <NavLink to={`${process.env.PUBLIC_URL}/AboutMe`} activeClassName='active' className={styles.marg}>AboutMe</NavLink>
          <NavLink to={`${process.env.PUBLIC_URL}/Works`} activeClassName='active' className={styles.marg}>Works</NavLink>
        </Col>
      </Row>
    </Grid>
  </nav>

);

export default PageNav;
