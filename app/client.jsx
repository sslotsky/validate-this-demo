import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { login } from 'MODULES/session/actions';

import store from './store';
import App from './App';
import DevTools from './DevTools';


const serializedUser = window.localStorage.getItem('user');
if (serializedUser) {
  store().dispatch(login(JSON.parse(serializedUser)));
}

ReactDOM.render(
  <Provider store={store()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);

ReactDOM.render((
  <DevTools store={store()} />
), document.getElementById('devtools'));

