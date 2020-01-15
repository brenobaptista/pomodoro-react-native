import * as actionTypes from '../actions/actionTypes';

const initialState = {
  checkmark1: false,
  checkmark2: false,
  checkmark3: false,
  checkmark4: false,
}

const checkmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECKMARK1:
      return {
        ...state,
        checkmark1: true,
      }
    case actionTypes.CHECKMARK2:
      return {
        ...state,
        checkmark2: true,
      }
    case actionTypes.CHECKMARK3:
      return {
        ...state,
        checkmark3: true,
      }
    case actionTypes.CHECKMARK4:
      return {
        ...state,
        checkmark4: true,
      }
    default:
      return state;
  }
}

export default checkmarkReducer;