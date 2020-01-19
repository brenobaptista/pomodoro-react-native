import * as actions from '../src/store/actions/alarm';
import * as actionTypes from '../src/store/actions/actionTypes';

describe('actions', () => {
  it('should return an object to activate the alarm', () => {
    const expectedAction = {
      type: actionTypes.ACTIVATE_ALARM
    };

    expect(actions.activateAlarm()).toEqual(expectedAction);
  });

  it('should return an object to cancel the alarm', () => {
    const expectedAction = {
      type: actionTypes.CANCEL_ALARM
    };

    expect(actions.cancelAlarm()).toEqual(expectedAction);
  });
});