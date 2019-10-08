import {call, put, takeEvery} from 'redux-saga/effects';
import {LOAD_TODO_LIST, RENDER_TODO_LIST} from "../actions";

export function* fetchToList() {
    const endpoint = 'https://gist.githubusercontent.com/brunokrebs/' +
        'f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    yield put({type: RENDER_TODO_LIST, toDoList: data});
}

export function* loadToList() {
    yield takeEvery(LOAD_TODO_LIST, fetchToList);
}

export default function* rootSaga() {
    yield call([loadToList()]);
}
