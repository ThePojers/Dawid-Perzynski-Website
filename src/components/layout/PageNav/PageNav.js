import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';

const PageNav = () => (

  <nav className={styles.component}>
    <Grid fluid>
      <Row>
        <Col xs className={styles.Name}>
          <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' className={styles.Marg}>Dawid Perzynski</NavLink>
        </Col>
        <Col xs className={styles.AboutMe}>
          <NavLink to={`${process.env.PUBLIC_URL}/AboutMe`} activeClassName='active' className={styles.Marg}>AboutMe</NavLink>
          <NavLink to={`${process.env.PUBLIC_URL}/Works`} activeClassName='active' className={styles.Marg}>Works</NavLink>
        </Col>
      </Row>
    </Grid>
  </nav>

);

export default PageNav;
