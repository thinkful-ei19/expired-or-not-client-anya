import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './store';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={createStore}>
        <Main />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
