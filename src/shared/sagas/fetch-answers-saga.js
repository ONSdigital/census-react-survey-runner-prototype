import {put, takeEvery} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import {getAnswers} from '../localStore';

export default function * () {
    yield takeEvery(types.REQUEST_FETCH_ANSWERS, handleFetchAnswers);
}

function * handleFetchAnswers() {
    let bootstrapObj = document.getElementById('bootstrapData');

    const remoteAnswers = JSON.parse(bootstrapObj.textContent);
    console.log("Got bootstrapped answers", remoteAnswers);

    const localAnswers = yield getAnswers();
    console.log("Got indexDB answers", localAnswers);

    yield put({type: types.FETCHED_ANSWERS, localAnswers, remoteAnswers});
}