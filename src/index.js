import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Main from './components/Main';
import createStore from './store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={createStore}>
        <Main />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
