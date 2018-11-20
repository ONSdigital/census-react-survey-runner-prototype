import express from 'express';
import yields from "express-yields";
import fs from "fs-extra";
import replace from 'lodash/replace';

import {validateToken} from './jti';

// TODO: refactor rendering
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';
import App from '../shared/components/App';
import {routes, getNextRoute} from '../shared/components/routing';
import getStore from '../shared/getStore';
import { loginUser, getAnswerStore, putAnswerStore } from './session';
import {__basedir} from './index';

const router = express.Router();
export default router;

const useServerRender = process.env.USE_SERVER_RENDER === 'true';

router.put('/api/answers/', function * (req, res) {
    const answers = req.body;
    console.log("Saving answers: ", answers);
    yield putAnswerStore(req, answers);
    res.send({"status": "OK"});
});

router.get('/session', function* (req, res) {
    const token = req.query.token;
    console.log("Got token", token);

    const decryptedToken = yield validateToken(token);
    console.log("Decrypted token", decryptedToken)

    yield loginUser(req, decryptedToken);

    res.redirect(getNextRoute());
});

router.get('/schemas', function* (req, res) {
    res.json(['census_household.json']);
})

router.get('/schemas/census/household', function* (req, res) {
    let schema = yield fs.readJSON(`${__basedir}/server/census_household.json`, "utf-8");
    res.json(schema);
})

router.get(routes, function * (req, res){
    let index = yield fs.readFile(`${__basedir }/public/index.html`, "utf-8");

    const replacements = {
        cdnUrlPrefix: "https://cdn.ons.gov.uk/sdc/v1.4.4",
        preloadedApplication: "Please wait while we load the application"
    };

    const history = createHistory({
        initialEntries:[req.path]
    });

    const initialState = {
        answerStore: {}
    };
    initialState.answerStore.answers = yield getAnswerStore(req);

    const store = getStore(history, initialState);

    if (useServerRender) {
        const appRendered = renderToString(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        )
        replacements.preloadedApplication = appRendered;
        replacements.bootstrapData = JSON.stringify(initialState.answerStore.answers);
    }    

    index = replacePlaceholders(index, replacements);

    res.send(index);
});

router.post(routes, function* (req, res) {
    /* This handler should only be called if the end user doesn't have JS enabled
    */
    const submittedAnswers = req.body;
    const existingAnswers = yield getAnswerStore(req);

    // merge
    const answers = Object.assign({}, existingAnswers, submittedAnswers);
    console.log("Saving answers: ", answers);
    yield putAnswerStore(req, answers);

    // TODO: validation
    const redirectTo = getNextRoute(req.path);
    res.redirect(redirectTo);
});

function replacePlaceholders(content, replacements) {
    for (var key in replacements) {
        content = replace(content, new RegExp(`<%= ${key} %>`, "g"), replacements[key]);        
    }
    return content;
}