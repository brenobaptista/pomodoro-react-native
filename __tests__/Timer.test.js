import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Timer from '../src/components/Timer/Timer';

const mockStore = configureStore();

const initialState = {
  timer: 1500,
  initialTimer: 1500,
};

const store = mockStore(initialState);

describe('Testing Timer Component', () => {
  it('should match to snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Timer />
      </Provider>,
    );

    expect(toJson(wrapper)).toMatchSnapshot('Timer snapshot');
  });
});
