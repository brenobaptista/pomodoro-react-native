import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Index from './components/Index';
import checkmarkReducer from './store/reducers/checkmark';
import timerReducer from './store/reducers/timer';

const rootReducer = combineReducers({
  check: checkmarkReducer,
  timer: timerReducer,
});

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}
