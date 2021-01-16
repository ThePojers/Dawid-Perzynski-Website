import {createStore, combineReducers} from 'redux';
import globalReducer from './globalRedux';

// define initial state and shallow-merge initial global
const initialState = {
  global: {
    works: [
      {
        id: 1,
        boxOrder: true,
        linkWebsite: 'https://perzynski.pl',
        text: 'Website made in react using create-react-app. When I was creating this website, I followed the examples of the best websites that have been awarded by awwwards. The animations were created in pure css with scss as a pre-processor. I manage the state of the application using the redux. The website is prepared to implement future features.',
        techStack: 'HTML, CSS, JavaScript, scss, react, redux, create react app, eslint, react-router-dom, react-router-transition, reac-flexbox-grid, husky, webpack, npm/yarn',
        boxOverlayText: '',
        imageSide: 'Works_boxImage__1UcSZ',
        image: 'Works_perzynski__LyJlG',
        linkSite: 'https://github.com/ThePojers/Dawid-Perzynski-Website',
      },
      {
        id: 2,
        boxOrder: false,
        linkWebsite: 'https://travel-agency-1.herokuapp.com/',
        text: 'Project made as part of the annual Web Developer Plus Bootcamp. This is an example of a complete website for a travel agency. The code was written, among other things, using the TDD method. The website features a happy hour counter and an automatic change of availability of current employees. Tests were done with jest and enzyme.',
        techStack: 'HTML, CSS, JavaScript, scss, react, redux, eslint, react-router-dom, react-router-transition, reac-flexbox-grid, husky, jest, enzyme, webpack, npm/yarn',
        boxOverlayText: 'DEMO',
        imageSide: 'Works_boxImageSecond__2UYe8',
        image: 'Works_travel__348da',
        linkSite: 'https://github.com/ThePojers/Travel-Agency',
      },
      {
        id: 3,
        boxOrder: true,
        linkWebsite: 'https://baza-store-group-project.herokuapp.com/',
        text: 'Group project made as part of the annual Web Developer Plus Bootcamp. We worked in the kanban system with the help of Jira. The project was developed by a total of 4 people. Project manager supervised our work. Our duties included mutual code review.',
        techStack: 'HTML, CSS, JavaScript, scss, react, redux, immutability-helper, eslint, react-router-dom, react-alice-carousel, husky, jest, enzyme, webpack, prettier, npm/yarn',
        boxOverlayText: 'DEMO',
        imageSide: 'Works_boxImage__1UcSZ',
        image: 'Works_shop__lR91e',
        linkSite: 'https://github.com/PatrykBulaKodilla/wdp-2009-01',
      },
      {
        id: 4,
        boxOrder: false,
        linkWebsite: 'https://login-interface-react2.herokuapp.com',
        text: 'Following good practice, I transferred AXIOS to the redux. The downloaded data from data-base is saved in the store. Additionally, it is very easy to add "lazy Loading" by managing loading.active variable. To get an incorrect answer from the server, enter the password: "Niedziała123"',
        techStack: 'HTML, CSS, SCSS, Material-Ui, JavaScript, ES6/Typescript, React, Redux, React-Router-Dom, Redux-thunk, Axios, husky(lint-staged), Create-react-app, Npm/Yarn, eslint',
        boxOverlayText: 'DEMO',
        imageSide: 'Works_boxImageSecond__2UYe8',
        image: 'Works_login__2HKwQ',
        linkSite: 'https://github.com/ThePojers/React-task-Codibly',
      },
      {
        id: 5,
        boxOrder: true,
        linkWebsite: 'https://mammamia-pizzeria.herokuapp.com',
        text: 'Project made as part of the annual Web Developer Plus Bootcamp. This is an example of a complete page for an Italian restaurant. The website was written using pure JavaScript. The website has connectivity to the database on the basis of which tables can be booked.',
        techStack: 'HTML, CSS, SCSS, JavaScript, ES6, Npm/Yarn, eslint, npm-run-all',
        boxOverlayText: 'DEMO',
        imageSide: 'Works_boxImage__1UcSZ',
        image: 'Works_pizza__stmoe',
        linkSite: 'https://github.com/ThePojers/Project-Pizzeria',
      },
    ],
  },
};

// define reducers
const reducers = {
  global: globalReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

const storeReducer = (state, action) => {
  const modifiedState = globalReducer(state, action);
  return combinedReducers(modifiedState, action);
};

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;