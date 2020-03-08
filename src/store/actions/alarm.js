import * as actionTypes from './actionTypes';

export const activateAlarm = () => ({
  type: actionTypes.ACTIVATE_ALARM,
});

export const cancelAlarm = () => ({
  type: actionTypes.CANCEL_ALARM,
});
