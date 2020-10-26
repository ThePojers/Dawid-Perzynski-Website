import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';

const PageNav = () => (

  <nav className={styles.component}>
    <Grid fluid>
      <Row>
        <Col xs={12}>
          <Row start="xs">
            <Col xs={6}>
              <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' className={styles.HomeName}>Dawid Perzyński </NavLink>
            </Col>
            <Col xsOffset={11} xs={1}>
              <NavLink to={`${process.env.PUBLIC_URL}/AboutMe`} activeClassName='active' className={styles.AboutMe}>AboutMe</NavLink>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </nav> 

);

export default PageNav;
