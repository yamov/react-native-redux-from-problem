import {createStore, combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';

function counter(state = {default: 'state'}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export const store = createStore(
  combineReducers({counter, form: reduxFormReducer}),
);
