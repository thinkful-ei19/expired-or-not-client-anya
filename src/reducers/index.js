import {ADD_LIST, REMOVE_LIST, UPDATE_LIST} from '../actions/lists';
import {ADD_ITEM} from '../actions/item';
import {FETCH_BOARD_SUCCESS} from '../actions/board';

const initialState = {
    lists: [],
    loading: false,
    error: null
}

export const groceryReducer = (state=initialState, action) => {
    if (action.type === ADD_LIST) {
        return Object.assign({}, state, {
            lists: [...state.lists]
        });
    }
    else if (action.type === ADD_ITEM) {
        let lists = state.lists.map((list, index) => {
            if (index !== action.listIndex) {
                return list;
            }
            return Object.assign({}, list, {
                cards: [...list.cards, {
                    text: action.text
                }]
            });
        });

        return Object.assign({}, state, {
            lists
        });
    }
    else if (action.type === FETCH_BOARD_SUCCESS) {
        return action.board;
    }
    return state;
};