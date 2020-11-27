import {all, call, put, takeEvery} from 'redux-saga/effects';

export function* fetchTodoList() {
    const endpoint = 'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    yield put({type: 'FETCH_RECORDS_SUCCESS', data});
}

export function* loadTodoList() {
    yield takeEvery('FETCH_RECORDS', fetchTodoList)
}

export default function* rootSaga() {
    yield all([loadTodoList()]);
}