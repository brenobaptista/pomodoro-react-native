import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Index from './src/scenes/Index';
import checkmarkReducer from './src/store/reducers/checkmark';
import timerReducer from './src/store/reducers/timer';
import shortBreakReducer from './src/store/reducers/shortBreak';
import longBreakReducer from './src/store/reducers/longBreak';
import alarmReducer from './src/store/reducers/alarm';

const rootReducer = combineReducers({
  check: checkmarkReducer,
  timer: timerReducer,
  shortBreak: shortBreakReducer,
  longBreak: longBreakReducer,
  alarm: alarmReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
