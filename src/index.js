import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './redux/reducers';

import App from './App';
import './index.css';

const ReduxStore = createStore(Reducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={ ReduxStore }>
    <App />
  </Provider>, 
  document.getElementById('root')
);
