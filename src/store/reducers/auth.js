import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  
  // AUTH_START
  if (action.type === actionTypes.AUTH_START) {
    return {
      ...state,
      error: null,
      loading: true
    };       
  }

  // AUTH_SUCCESS
  if (action.type === actionTypes.AUTH_SUCCESS) {
    return {
      ...state,
      token: action.token,
      userId: action.userId,
      error: null,
      loading: false
    };     
  }

  // AUTH_FAILED
  if (action.type === actionTypes.AUTH_FAILED) {
    return {
      ...state,
      error: action.error,
      loading: false
    };     
  }

  // AUTH_LOGOUT
  if (action.type === actionTypes.AUTH_LOGOUT) {
    return {
      ...state,
      token: null,
      userId: null
    }
  }

  return state;
}

export default reducer;