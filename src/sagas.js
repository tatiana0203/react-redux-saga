import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPosts() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    yield put({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
  } catch (e) {
    yield put({ type: 'FETCH_POSTS_FAILURE', payload: e.message });
  }
}

function* postsSaga() {
  yield takeLatest('FETCH_POSTS_REQUEST', fetchPosts);
}

export default postsSaga;