import * as actionTypes from './actionTypes';

export const activateAlarm = () => {
  return {
    type: actionTypes.ACTIVATE_ALARM,
  };
};

export const cancelAlarm = () => {
  return {
    type: actionTypes.CANCEL_ALARM,
  };
};
