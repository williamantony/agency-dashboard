import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './redux/reducers';

import App from './App';
import './index.css';

const ReduxStore = createStore(Reducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={ ReduxStore }>
    <Router>
      <Route path="/" component={ App } />
    </Router>
  </Provider>, 
  document.getElementById('root')
);
