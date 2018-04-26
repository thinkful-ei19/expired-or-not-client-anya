import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import listItemsReducer from './reducers';

export default createStore(listItemsReducer, applyMiddleware(thunk));