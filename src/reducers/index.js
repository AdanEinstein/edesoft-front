import { combineReducers } from 'redux';
import UserReducer from './userreducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  contactStore: UserReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
