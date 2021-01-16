import React, { useEffect } from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import AboutMe from './components/views/AboutMe/AboutMe';
import Homepage from './components/views/HomePage/HomePage';
import Works from './components/views/Works/WorksContainer';
import {BrowserRouter, Route} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { Provider } from 'react-redux';
import store from './redux/store';
import Loading from './components/features/Loading/Loading';
import styles from './App.module.scss';
function App() {

  return (
    <Provider store={store}>
      <Loading />
      <BrowserRouter>
        <MainLayout >
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className={styles.switchWrapper}
          >
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
            <Route exact path={`${process.env.PUBLIC_URL}/AboutMe`} component={AboutMe} />
            <Route exact path={`${process.env.PUBLIC_URL}/Works`} component={Works} />
          </AnimatedSwitch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
