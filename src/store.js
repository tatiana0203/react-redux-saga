import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import postsSaga from './sagas';
import postsReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  postsReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(postsSaga);

export default store;