import * as actionTypes from '../actions/actionTypes';

const initialState = {
  ringAlarm: false,
};

const alarmReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTIVATE_ALARM:
      return {
        ...state,
        ringAlarm: true,
      };
    case actionTypes.CANCEL_ALARM:
      return {
        ...state,
        ringAlarm: false,
      };
    default:
      return state;
  }
};

export default alarmReducer;
