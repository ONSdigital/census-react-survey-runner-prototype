import {select, takeEvery, put} from 'redux-saga/effects';
import {saveAnswersToApi} from '../actions/answers';
import * as types from '../actions/actionTypes';

const TWO_MINUTES = 120000;
const MAX_DELAY = TWO_MINUTES;

let lastSaveTime;
let nextSaveTime;
// TODO: consider outstanding local saves

export default function * () {
    yield takeEvery(types.FETCHED_ANSWERS, handleTriggerSave);
}


function * handleTriggerSave() {
    console.log("Running trigger saga")

    const state = yield select();

    const needsAPISync = state.answerStore.needsAPISync;

    if (needsAPISync) {
        if (!nextSaveTime || nextSaveTime < lastSaveTime) {
            console.log("triggering saveAnswersToApi")

            yield put(saveAnswersToApi());
            setSaveTime();
        } else {
            console.log("skipping save to API")
        }
    } else {
        console.log("does not need sync to API")
    }
}

const setSaveTime = () => {
    lastSaveTime = new Date();
    nextSaveTime = lastSaveTime + MAX_DELAY;
}