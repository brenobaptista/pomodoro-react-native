import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Index from './components/Index';
import checkmarkReducer from './store/reducers/checkmark';
import timerReducer from './store/reducers/timer';
import shortBreakReducer from './store/reducers/shortBreak';
import longBreakReducer from './store/reducers/longBreak';
import alarmReducer from './store/reducers/alarm';

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
