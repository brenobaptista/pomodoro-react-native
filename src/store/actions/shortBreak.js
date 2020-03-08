import * as actionTypes from './actionTypes';

export const changePlayShortBreak = () => ({
  type: actionTypes.CHANGE_PLAY_SHORT_BREAK,
});

export const decreaseTimerShortBreak = () => ({
  type: actionTypes.DECREASE_TIMER_SHORT_BREAK,
});

export const resetTimerShortBreak = () => ({
  type: actionTypes.RESET_TIMER_SHORT_BREAK,
});
