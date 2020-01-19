import * as actionTypes from './actionTypes';

export const changePlay = () => {
  return {
    type: actionTypes.CHANGE_PLAY,
  };
};

export const decreaseTimer = () => {
  return {
    type: actionTypes.DECREASE_TIMER,
  };
};

export const resetTimer = () => {
  return {
    type: actionTypes.RESET_TIMER,
  };
};

export const shortBreakMode = () => {
  return {
    type: actionTypes.SHORT_BREAK_MODE,
  }
}

export const longBreakMode = () => {
  return {
    type: actionTypes.LONG_BREAK_MODE,
  }
}

export const timerMode = () => {
  return {
    type: actionTypes.TIMER_MODE,
  }
}
