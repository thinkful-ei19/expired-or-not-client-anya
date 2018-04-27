import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import listItems from './reducers';

export default createStore(listItems, applyMiddleware(thunk));