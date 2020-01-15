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
