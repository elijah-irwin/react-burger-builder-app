import * as actionTypes from '../actions/actionTypes';

const initalState = {
  orders: [],
  loading: false,
  purchased: false
}

const reducer = (state = initalState, action) => {
  
  // PURCHASE_BURGER_START
  if (action.type === actionTypes.PURCHASE_BURGER_START) {
    return {
      ...state,
      loading: true
    }
  }

  // PURCHASE_BURGER_SUCCESS
  if (action.type === actionTypes.PURCHASE_BURGER_SUCCESS) {
    
    const newOrder = {
      ...action.orderData,
      id: action.orderId
    }
    
    return {
      ...state,
      loading: false,
      purchased: true,
      orders: state.orders.concat(newOrder)
    };
  }

  // PURCHASE_BURGER_FAILED
  if (action.type === actionTypes.PURCHASE_BURGER_FAILED) {
    return {
      ...state,
      loading: false
    };
  }

  // PURCHASE_INIT
  if (action.type === actionTypes.PURCHASE_INIT) {
    return {
      ...state,
      purchased: false
    };
  }

  // FETCH_ORDERS_START
  if (action.type === actionTypes.FETCH_ORDERS_START) {
    return {
      ...state,
      loading: true
    }
  }

  // FETCH_ORDERS_SUCCESS
  if (action.type === actionTypes.FETCH_ORDERS_START) {
    return {
      ...state,
      orders: action.orders,
      loading: false
    }
  }

  // FETCH_ORDERS_FAILED
  if (action.type === actionTypes.FETCH_ORDERS_START) {
    return {
      ...state,
      loading: false
    }
  }
  
  return state;
};

export default reducer;