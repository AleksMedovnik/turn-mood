import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import ScrollToTop from './ScrollToTop';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <ScrollToTop />
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);

reportWebVitals();