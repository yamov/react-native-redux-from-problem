import {createStore, combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';

export const store = createStore(combineReducers({form: reduxFormReducer}));
