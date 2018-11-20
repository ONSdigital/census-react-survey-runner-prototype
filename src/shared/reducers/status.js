import assign from 'lodash/assign';
import * as types from '../actions/actionTypes';

export const status = (state = {messages: {}}, {type})=>{
    // TODO: refactor this mess
    if (type === types.SAVE_ANSWERS_API) {
        state = assign({}, state);
        state.messages[types.SAVE_ANSWERS_API] = "Saving answers to API";
    }

    if (type === types.SAVE_ANSWERS_API_FINISHED && state.messages[types.SAVE_ANSWERS_API]) {
        state = assign({}, state);
        delete state.messages[types.SAVE_ANSWERS_API];
    }

    if (type === types.SAVE_ANSWERS_INDEXEDDB) {
        state = assign({}, state);
        state.messages[types.SAVE_ANSWERS_INDEXEDDB] = "Saving answers to IndexedDB";
    }

    if (type === types.SAVE_ANSWERS_INDEXEDDB_SUCCESS) {
        state = assign({}, state);
        delete state.messages[types.SAVE_ANSWERS_INDEXEDDB];
    }

    return state;
}
