
import { delay } from 'redux-saga'
import {select, put, takeEvery, call} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import {saveAnswersIndexedDBSuccess} from '../actions/answers';
import {saveAnswers} from '../localStore';

export default function * () {
    yield takeEvery(types.SAVE_ANSWERS_INDEXEDDB, saveAnswersToIndexedDB);
}

function * saveAnswersToIndexedDB () {
    console.log("Saving answers indexedDB...");
    const state = yield select();
    const answers = state.answerStore.answers;

    yield saveAnswers(answers);

    // force delay for demo
    yield call(delay, 800);

    console.log("Saved answers indexedDB...", answers);
    yield put(saveAnswersIndexedDBSuccess(answers));
    yield put({type: `REQUEST_FETCH_ANSWERS`});
}

