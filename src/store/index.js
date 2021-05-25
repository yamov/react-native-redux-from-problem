import {createStore, combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';

const reducers = combineReducers({form: reduxFormReducer});

const rootReduer = (s, a) => {
  console.log('s a', s, a);
  return reducers(s, a);
};

export const store = createStore(rootReduer);
