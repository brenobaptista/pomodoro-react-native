import * as actionTypes from './actionTypes';

export const changePlayLongBreak = () => {
  return {
    type: actionTypes.CHANGE_PLAY_LONG_BREAK,
  };
};

export const decreaseTimerLongBreak = () => {
  return {
    type: actionTypes.DECREASE_TIMER_LONG_BREAK,
  };
};

export const resetTimerLongBreak = () => {
  return {
    type: actionTypes.RESET_TIMER_LONG_BREAK,
  };
};
