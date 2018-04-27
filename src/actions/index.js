//import {API_BASE_URL} from '../config';

export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const addListItem = item => ({
  type: ADD_LIST_ITEM,
  item
});

export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';
export const removeListItem = itemId => ({
  type: REMOVE_LIST_ITEM,
  itemId
});

export const REMOVE_ALL_LIST_ITEMS = 'REMOVE_ALL_LIST_ITEMS';
export const removeAllListItems = () => ({
  type: REMOVE_ALL_LIST_ITEMS
});