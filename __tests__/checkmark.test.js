import * as actions from '../src/store/actions/checkmark';
import * as actionTypes from '../src/store/actions/actionTypes';

describe('actions', () => {
  it('should return an object to check the first checkmark', () => {
    const expectedAction = {
      type: actionTypes.CHECKMARK1
    };

    expect(actions.checkmark1()).toEqual(expectedAction);
  });

  it('should return an object to check the second checkmark', () => {
    const expectedAction = {
      type: actionTypes.CHECKMARK2
    };

    expect(actions.checkmark2()).toEqual(expectedAction);
  });

  it('should return an object to check the third checkmark', () => {
    const expectedAction = {
      type: actionTypes.CHECKMARK3
    };

    expect(actions.checkmark3()).toEqual(expectedAction);
  });

  it('should return an object to check the fourth checkmark', () => {
    const expectedAction = {
      type: actionTypes.CHECKMARK4
    };

    expect(actions.checkmark4()).toEqual(expectedAction);
  });

  it('should return an object to uncheck all checkmarks', () => {
    const expectedAction = {
      type: actionTypes.RESET_CHECKMARKS
    };

    expect(actions.resetCheckmarks()).toEqual(expectedAction);
  });
});