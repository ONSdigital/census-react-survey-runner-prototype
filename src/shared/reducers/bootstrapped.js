import * as types from '../actions/actionTypes';

export const bootstrapped = (state = false, {type})=>{
    if (type === types.FETCHED_ANSWERS) {
        state = true
    }

    return state;
}
