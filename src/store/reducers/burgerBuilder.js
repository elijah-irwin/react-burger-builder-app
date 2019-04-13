import * as actionTypes from '../actions/actionTypes';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
}

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};


const reducer = (state = initialState, action) => {

  // ADD_INGREDIENT
  if (action.type === actionTypes.ADD_INGREDIENT) {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1
      },
      totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    };
  }

  // REMOVE_INGREDIENT
  if (action.type === actionTypes.REMOVE_INGREDIENT) {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
      },
      totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    };
  }

  // SET_INGREDIENTS
  if (action.type === actionTypes.SET_INGREDIENTS) {
    return {
      ...state,
      ingredients: {
        salad: action.ingredients.salad,
        bacon: action.ingredients.bacon,
        cheese: action.ingredients.cheese,
        meat: action.ingredients.meat
      },
      totalPrice: 4,
      error: false
    };
  }

  // FETCH_INGREDIENTS_FAILED
  if (action.type === actionTypes.FETCH_INGREDIENT_FAILED) {
    return {
      ...state,
      error: true
    }
  }
  
  return state;
};

export default reducer;