import {ADD_LIST_ITEM, REMOVE_LIST_ITEM, REMOVE_ALL_LIST_ITEMS} from '../actions/index';

const initialState = {
    items: {}
};

const removeItemFromList = (items, itemId) => {
    const newListItems = {...items};
    delete newListItems[itemId];
    return newListItems
}

export default function listItems (state=initialState, action) {  

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
            items: removeItemFromList(state.items, action.item.id)
        }
    }

    if (action.type === REMOVE_ALL_LIST_ITEMS) {
        return {
            items: {}
        }
    }
    return state;
}
