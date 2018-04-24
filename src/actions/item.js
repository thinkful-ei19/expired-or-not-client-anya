export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (name, listIndex, expTime) => ({
    type: ADD_ITEM,
    name, 
    listIndex,
    expTime
});

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const removeItem = () => ({
    type: REMOVE_ITEM
});
export const SET_LOGOUT_TIME = 'SET_LOGOUT_TIME ';
export const setLogoutTime = logoutTime => ({
    type: SET_LOGOUT_TIME,
    logoutTime
});



