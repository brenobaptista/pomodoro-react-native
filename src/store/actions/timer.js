import * as actionTypes from './actionTypes';

export const changePlay = () => ({
  type: actionTypes.CHANGE_PLAY,
});

export const decreaseTimer = () => ({
  type: actionTypes.DECREASE_TIMER,
});

export const resetTimer = () => ({
  type: actionTypes.RESET_TIMER,
});

export const shortBreakMode = () => ({
  type: actionTypes.SHORT_BREAK_MODE,
});

export const longBreakMode = () => ({
  type: actionTypes.LONG_BREAK_MODE,
});

export const timerMode = () => ({
  type: actionTypes.TIMER_MODE,
});
