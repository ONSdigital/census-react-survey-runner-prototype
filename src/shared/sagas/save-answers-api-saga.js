import {select, call, put, takeEvery} from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import {saveAnswersApiFinished} from '../actions/answers';

export default function * () {
    yield takeEvery(types.SAVE_ANSWERS_API, saveAnswersToAPI);
}

function * saveAnswersToAPI() {
    console.log("Saving answers API...");
    const state = yield select();
    const answers = state.answerStore.answers;

    const params = {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(answers)
    }

    try {
        yield call(fetch, '/api/answers', params);
        console.log("Saved to API successfully")
    } catch (e) {
        console.log("Failed to save to API")
    }

    yield put(saveAnswersApiFinished(answers));
}