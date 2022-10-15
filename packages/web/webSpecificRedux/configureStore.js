import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import indexSaga from '@car-service/redux/sagas';
import webSpecificSagas from './sagas';
import persistedReducer from './persistReducer';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = {}) {
  const store = createStore(persistedReducer, initialState, bindMiddleware([sagaMiddleware]));

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(function* rootSaga() {
      yield all([...indexSaga, ...webSpecificSagas]);
    });
  };

  store.runSagaTask();
  return store;
}

export default configureStore;
