import {API_BASE_URL} from '../config';

export const FETCH_FRIDGE_SUCCESS = 'FETCH_FRIDGE_SUCCESS';
export const fetchFridgeSuccess = fridge => ({
    type: FETCH_FRIDGE_SUCCESS,
    fridge
});

export const fetchFridge = () => dispatch => {
    fetch(`${API_BASE_URL}/board`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(board => {
            dispatch(fetchBoardSuccess(board));
        });
};