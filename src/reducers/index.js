import { combineReducers } from 'redux';
import { reducer as formsReducer } from 'redux-form';

import auth from './auth';
import counter from './counter';
import jsonPlaceholder from './jsonPlaceholder';

export default combineReducers({
  auth,
  counter,
  jsonPlaceholder,
  form: formsReducer,
});
