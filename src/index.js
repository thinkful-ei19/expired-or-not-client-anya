import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Board from './components/Board';
import store from './store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Board />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
