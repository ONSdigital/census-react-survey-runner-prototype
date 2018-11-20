import crypto from 'crypto';
import {putData, getData} from './db';

const userIdSecret = process.env.EQ_SERVER_SIDE_STORAGE_USER_ID_SALT;
const userIkSecret = process.env.EQ_SERVER_SIDE_STORAGE_USER_IK_SALT;

if (!userIdSecret) {
    throw "Missing EQ_SERVER_SIDE_STORAGE_USER_ID_SALT";
}
if (!userIkSecret) {
    throw "Missing EQ_SERVER_SIDE_STORAGE_USER_IK_SALT";
}

export function* loginUser(req, metadata) {
    const userIk = generateUserIk(metadata);
    const userId = generateUserId(metadata);

    req.session.userIk = userIk;
    yield putData('session', {userId: userId}, userIk);
}

export function* getAnswerStore(req) {
    const sessionObj = yield getSession(req);
    return yield getData('answers', sessionObj.userId);
}

export function* putAnswerStore(req, data) {
    const sessionObj = yield getSession(req);
    return yield putData('answers', data, sessionObj.userId);
}

export function* getSession(req) {
    const sessionObj = yield getData('session', req.session.userIk);
    if (!sessionObj) {
        throw 'No session';
    }
    return sessionObj;
}

const generateUserId = (metadata) => {
    return generateId(metadata, userIdSecret);
}

const generateUserIk = (metadata) => {
    return generateId(metadata, userIkSecret);    
}

const generateId = ({collection_exercise_sid, eq_id, form_type, ru_ref}, secret) => {
    const material = collection_exercise_sid + eq_id + form_type + ru_ref;
    return crypto.createHmac('sha256', secret)
                   .update(material)
                   .digest('hex');
}