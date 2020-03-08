import * as actions from '../src/store/actions/longBreak';
import * as actionTypes from '../src/store/actions/actionTypes';

describe('actions', () => {
  it('should return an object to change the long break', () => {
    const expectedAction = {
      type: actionTypes.CHANGE_PLAY_LONG_BREAK,
    };

    expect(actions.changePlayLongBreak()).toEqual(expectedAction);
  });

  it('should return an object to decrease the timer', () => {
    const expectedAction = {
      type: actionTypes.DECREASE_TIMER_LONG_BREAK,
    };

    expect(actions.decreaseTimerLongBreak()).toEqual(expectedAction);
  });

  it('should return an object to reset the timer', () => {
    const expectedAction = {
      type: actionTypes.RESET_TIMER_LONG_BREAK,
    };

    expect(actions.resetTimerLongBreak()).toEqual(expectedAction);
  });
});
