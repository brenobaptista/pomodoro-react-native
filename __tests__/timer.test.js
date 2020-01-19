import * as actions from '../src/store/actions/timer';
import * as actionTypes from '../src/store/actions/actionTypes';

describe('actions', () => {
  it('should return an object to change the play button', () => {
    const expectedAction = {
      type: actionTypes.CHANGE_PLAY
    };

    expect(actions.changePlay()).toEqual(expectedAction);
  });

  it('should return an object to decrease the timer', () => {
    const expectedAction = {
      type: actionTypes.DECREASE_TIMER
    };

    expect(actions.decreaseTimer()).toEqual(expectedAction);
  });

  it('should return an object to reset the timer', () => {
    const expectedAction = {
      type: actionTypes.RESET_TIMER
    };

    expect(actions.resetTimer()).toEqual(expectedAction);
  });

  it('should return an object to activate the short break mode', () => {
    const expectedAction = {
      type: actionTypes.SHORT_BREAK_MODE
    };

    expect(actions.shortBreakMode()).toEqual(expectedAction);
  });

  it('should return an object to activate the long break mode', () => {
    const expectedAction = {
      type: actionTypes.LONG_BREAK_MODE
    };

    expect(actions.longBreakMode()).toEqual(expectedAction);
  });

  it('should return an object to activate the timer mode', () => {
    const expectedAction = {
      type: actionTypes.TIMER_MODE
    };

    expect(actions.timerMode()).toEqual(expectedAction);
  });
});