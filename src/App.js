import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import AboutMe from './components/views/AboutMe/AboutMe';
import Homepage from './components/views/HomePage/HomePage';
import Works from './components/views/Works/Works';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import TablesBookingId from './components/views/TablesBookingId/TablesBookingId';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout >
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
            <Route exact path={`${process.env.PUBLIC_URL}/AboutMe`} component={AboutMe} />
            <Route exact path={`${process.env.PUBLIC_URL}/Works`} component={Works} />
            {/* <Route exact path={`${process.env.PUBLIC_URL}/AboutMe/booking/table/:id`} component={AboutMeBookingId} /> */}
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
