import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import DevTools from './DevTools';

let store;

export default function create() {
  if (!store) {
    const storeCreator = process.env.NODE_ENV === 'production' ?
      applyMiddleware(thunk) :
      compose(applyMiddleware(thunk), DevTools.instrument());

    store = createStore(
      reducers,
      storeCreator
    );
  }

  return store;
}
