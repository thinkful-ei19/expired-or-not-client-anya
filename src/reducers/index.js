import {ADD_LIST_ITEM, REMOVE_LIST_ITEM, REMOVE_ALL_LIST_ITEMS} from '../actions/index';

const initialState = {
    items: {}
};


export default function listItemsReducer (state=initialState, action) {
  
    const removeItemFromList = (items, itemId) => {
        const newListItems = {...items};
        delete newListItems[itemId];
        return newListItems
    }

    if (action.type === ADD_LIST_ITEM) {
        return {
            items: {
                ...state.items,
                [action.item.id]: action.item
            }
        }
    }

    if (action.type === REMOVE_LIST_ITEM) {
        return {
            items: removeItemFromList(state.items, action.itemId)
        }
    }

    if (action.type === REMOVE_ALL_LIST_ITEMS) {
        return {
            items: {}
        }
    }
    return state;
}
