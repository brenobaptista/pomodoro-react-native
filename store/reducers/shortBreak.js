import * as actionTypes from '../actions/actionTypes';

const initialState = {
  shortBreak: 300,
  initialShortBreak: 300,
  playPressed: false,
};

const shortBreakReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PLAY_SHORT_BREAK:
      return {
        ...state,
        playPressed: !state.playPressed,
      };
    case actionTypes.DECREASE_TIMER_SHORT_BREAK:
      return {
        ...state,
        shortBreak: state.shortBreak - 1,
      };
    case actionTypes.RESET_TIMER_SHORT_BREAK:
      return {
        ...state,
        shortBreak: 300,
      };
    default:
      return state;
  }
};

export default shortBreakReducer;
