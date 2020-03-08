import * as actions from '../src/store/actions/shortBreak';
import * as actionTypes from '../src/store/actions/actionTypes';

describe('actions', () => {
  it('should return an object to change the short break', () => {
    const expectedAction = {
      type: actionTypes.CHANGE_PLAY_SHORT_BREAK,
    };

    expect(actions.changePlayShortBreak()).toEqual(expectedAction);
  });

  it('should return an object to decrease the timer', () => {
    const expectedAction = {
      type: actionTypes.DECREASE_TIMER_SHORT_BREAK,
    };

    expect(actions.decreaseTimerShortBreak()).toEqual(expectedAction);
  });

  it('should return an object to reset the timer', () => {
    const expectedAction = {
      type: actionTypes.RESET_TIMER_SHORT_BREAK,
    };

    expect(actions.resetTimerShortBreak()).toEqual(expectedAction);
  });
});
