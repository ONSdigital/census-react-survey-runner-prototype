import {assign, mergeWith, isUndefined, isEqual, values} from 'lodash';
import * as types from '../actions/actionTypes';


// TODO: questionnairestore to be parent class which can hold the state of whether local state is out of date or not.

export const answerStore = (state = {}, {type, pageAnswers, remoteAnswers, localAnswers})=>{
    let answers = state.answers;
    let needsAPISync = state.needsAPISync;

    if (type === types.FETCHED_ANSWERS) {
        answers = mergeAnswers(remoteAnswers, localAnswers);
        needsAPISync = !isInSync(answers, remoteAnswers);
    }

    if (type === types.SAVE_PAGE_ANSWERS) {
        // no need to merge here - just overwrite
        answers = assign({}, state, pageAnswers);
        needsAPISync = true;
    }
    
    if (type === types.SAVE_ANSWERS_API_SUCCESS) {
        needsAPISync = false;
    }

    state = {
        answers: answers,
        needsAPISync: needsAPISync
    }

    return state;
}

const mergeAnswers = (remoteAnswers, localAnswers) => {
    const answers = {};

    mergeWith(answers, remoteAnswers, localAnswers, (remoteAnswer, localAnswer) => {
        if (isUndefined(remoteAnswer)) {
            remoteAnswer = {timestamp: 0, value: null};
        }
        if (isUndefined(localAnswer)) {
            localAnswer = {timestamp: 0, value: null};
        }
        return new Date(remoteAnswer.timestamp) >= new Date(localAnswer.timestamp) ? remoteAnswer : localAnswer;
    });

    return answers
};

const getSortedValues = answers => values(answers).map(({value})=>value);

const isInSync = (mergedAnswers, remoteAnswers) => {
    return isEqual(getSortedValues(mergedAnswers), getSortedValues(remoteAnswers))
};