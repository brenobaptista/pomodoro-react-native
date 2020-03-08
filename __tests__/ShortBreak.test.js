import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ShortBreak from '../src/components/ShortBreak/ShortBreak';

const mockStore = configureStore();

const initialState = {
  timer: 300,
  initialTimer: 300,
};

const store = mockStore(initialState);

describe('Testing Short Break Component', () => {
  it('should match to snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ShortBreak />
      </Provider>,
    );

    expect(toJson(wrapper)).toMatchSnapshot('Short Break snapshot');
  });
});
