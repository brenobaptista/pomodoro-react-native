import * as actionTypes from '../actions/actionTypes';

const initialState = {
  longBreak: 1800,
  initialLongBreak: 1800,
  playPressed: false,
};

const longBreakReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PLAY_LONG_BREAK:
      return {
        ...state,
        playPressed: !state.playPressed,
      };
    case actionTypes.DECREASE_TIMER_LONG_BREAK:
      return {
        ...state,
        longBreak: state.longBreak - 1,
      };
    case actionTypes.RESET_TIMER_LONG_BREAK:
      return {
        ...state,
        longBreak: 1800,
      };
    default:
      return state;
  }
};

export default longBreakReducer;
