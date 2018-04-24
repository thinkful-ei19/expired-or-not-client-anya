import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Board from './components/Board';
import createStore from './store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={createStore}>
        <Board lists={[1,2,3,4]}/>
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
