import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import connectionsList from './connections-list.js';
import currentConnection from './current-connection.js';

export default combineReducers({
  form,
  connectionsList,
  currentConnection
});