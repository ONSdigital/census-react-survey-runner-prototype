import * as types from './actionTypes';

export function saveAnswersApiFinished(answers) {
    return {type: types.SAVE_ANSWERS_API_FINISHED, answers};
}

export function saveAnswersIndexedDBSuccess(answers) {
    return {type: types.SAVE_ANSWERS_INDEXEDDB_SUCCESS, answers};
}

export function saveAnswersToApi() {
    console.log("Triggering ", types.SAVE_ANSWERS_API);
    return {type: types.SAVE_ANSWERS_API};
}

export function saveAnswersToIndexedDB() {
    console.log("Triggering ", types.SAVE_ANSWERS_INDEXEDDB);
    return {type: types.SAVE_ANSWERS_INDEXEDDB};
}

export function savePageAnswers(pageAnswers) {
    console.log("Triggering ", types.SAVE_PAGE_ANSWERS);
    return {type: types.SAVE_PAGE_ANSWERS, pageAnswers};
}