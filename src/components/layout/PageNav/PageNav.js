import React, { useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';




const PageNav = () => {

  useEffect(
    () => {
      const navElements = document.querySelectorAll('.PageNav_marg__xXOBC');
      console.log(navElements);
      const homePage = navElements[0];
      const aboutMe = navElements[1];
      const works = navElements[2];

      window.addEventListener('load', function(){
        if(window.location.href.includes('Works') || window.location.href.includes('AboutMe')){
          document.body.style.overflow ='scroll';
        }
      });
      aboutMe.addEventListener('click', function(){
        document.body.style.overflow ='scroll';
      });

      works.addEventListener('click', function(){
        document.body.style.overflow ='scroll';
      });

      homePage.addEventListener('click', function(){
        document.body.style.overflow ='hidden';
      });
    },
  );
  return(
    <nav className={styles.component}>
      <Grid fluid>
        <Row>
          <Col xs className={styles.name}>
            <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' className={styles.marg}><span>Dawid Perzynski</span></NavLink>
          </Col>
          <Col xs className={styles.aboutMe}>
            <NavLink to={`${process.env.PUBLIC_URL}/AboutMe`} activeClassName='active' className={styles.marg}><span>AboutMe</span></NavLink>
            <NavLink to={`${process.env.PUBLIC_URL}/Works`} activeClassName='active' className={styles.marg}><span>Works</span></NavLink>
          </Col>
        </Row>
      </Grid>
    </nav>
  );
};


export default PageNav;
