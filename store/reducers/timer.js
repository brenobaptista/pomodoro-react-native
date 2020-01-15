import * as actionTypes from '../actions/actionTypes';

const initialState = {
  timer: 1500,
  initialTimer: 1500,
  playPressed: false,
}

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PLAY:
      return {
        ...state,
        playPressed: !state.playPressed,
      }
    case actionTypes.DECREASE_TIMER:
      return {
        ...state,
        timer: state.timer - 1,
      }
    case actionTypes.RESET_TIMER:
      return {
        ...state,
        timer: 1500,
      }
    default:
      return state;
  }
}

export default timerReducer;