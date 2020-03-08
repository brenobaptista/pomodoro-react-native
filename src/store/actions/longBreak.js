import * as actionTypes from './actionTypes';

export const changePlayLongBreak = () => ({
  type: actionTypes.CHANGE_PLAY_LONG_BREAK,
});

export const decreaseTimerLongBreak = () => ({
  type: actionTypes.DECREASE_TIMER_LONG_BREAK,
});

export const resetTimerLongBreak = () => ({
  type: actionTypes.RESET_TIMER_LONG_BREAK,
});
