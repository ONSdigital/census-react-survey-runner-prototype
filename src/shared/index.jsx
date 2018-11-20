import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import getStore from './getStore';
import App from './components/App';
import * as serviceWorker from '../client/serviceWorker';
import {createStore} from './localStore';

let _appMounted;
const history = createHistory();
const store = getStore(history, {}, true);

createStore({
    name: 'Census Questionnaire',
    version: 1,
    storeName: 'census-questionnaire',
});

const fetchAnswers = () => {
    store.dispatch({type: `REQUEST_FETCH_ANSWERS`});
};

const hydrate = (_App)=>{
    ReactDOM.hydrate(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <_App/>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('AppContainer')
    );
}


store.subscribe(()=>{
    const state = store.getState();
    console.log("State: ", state);

    if (_appMounted) {
        return;
    }

    if (state.bootstrapped) {
        console.info("Mounting app");
        hydrate(App);
        _appMounted = true;

        serviceWorker.register();
    } else {
        console.log('App not yet mounting');
    }
});
fetchAnswers();
