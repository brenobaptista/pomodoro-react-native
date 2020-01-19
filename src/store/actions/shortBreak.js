import * as actionTypes from './actionTypes';

export const changePlayShortBreak = () => {
  return {
    type: actionTypes.CHANGE_PLAY_SHORT_BREAK,
  };
};

export const decreaseTimerShortBreak = () => {
  return {
    type: actionTypes.DECREASE_TIMER_SHORT_BREAK,
  };
};

export const resetTimerShortBreak = () => {
  return {
    type: actionTypes.RESET_TIMER_SHORT_BREAK,
  };
};
