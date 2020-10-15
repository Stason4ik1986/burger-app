// import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

export const addIngredient = (ingredientName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName,
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients,
    };
};

export const initIngredients = () => {
    // For testing thunk:
    // return dispatch => {
    //     axios.get('/ingredients.json')
    //         .then(response => {
    //             dispatch(setIngredients(response.data));
    //         })
    //         .catch(error => {
    //             dispatch(fetchIngredientsFailed());
    //         });
    // };
    // For testing saga:
    return {
        type: actionTypes.INIT_INGREDIENT,
    }
};

export const removeIngredient = (ingredientName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName,
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

