import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxISI from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for redux dev tools

  const enhancers = applyMiddleware(reduxISI());

  return createStore(rootReducer, initialState, composeEnhancers(enhancers));
}
