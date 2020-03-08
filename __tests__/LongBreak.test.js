import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LongBreak from '../src/components/LongBreak/LongBreak';

const mockStore = configureStore();

const initialState = {
  timer: 1800,
  initialTimer: 1800,
};

const store = mockStore(initialState);

describe('Testing Long Break Component', () => {
  it('should match to snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <LongBreak />
      </Provider>,
    );

    expect(toJson(wrapper)).toMatchSnapshot('Long Break snapshot');
  });
});
