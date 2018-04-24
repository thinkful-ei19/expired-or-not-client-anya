
export const ADD_LIST = 'ADD_LIST';
export const addList = (title) => ({
    type: ADD_LIST,
    title
});

export const REMOVE_LIST = 'REMOVE_LIST';
export const removeList = (title) => ({
    type: REMOVE_LIST,
    title
});

export const UPDATE_LIST = 'UPDATE_LIST';
export const updateList = (title) => ({
    type: UPDATE_LIST,
    title
})

