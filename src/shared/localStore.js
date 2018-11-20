import assign from 'lodash/assign';
import localForage from 'localforage';

const answerStoreKey = "answers";
let store;

export const createStore = (config) => 
    store = localForage.createInstance({
        driver: localForage.INDEXEDDB,
        version: 0,

        ...config
});

export function* saveAnswers (answersObj) {
    if (!store) {
        throw "localForage store not created";
    }

    const existingAnswers = yield getAnswers();
    const updatedAnswers = assign(existingAnswers, answersObj);

    return yield store.setItem(answerStoreKey, updatedAnswers);
}

export function* getAnswers () {
    if (!store) {
        throw "localForage store not created";
    }
    return yield store.getItem(answerStoreKey);
}