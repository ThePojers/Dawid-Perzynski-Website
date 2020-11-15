import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import styles from './MainLayout.module.scss';

const MainLayout = ({children}) => {

  return (
    <div className='wrapper-for-parralax'>
      <PageNav></PageNav>
      <main className={styles.mainIndex}>
        {children}
      </main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;

