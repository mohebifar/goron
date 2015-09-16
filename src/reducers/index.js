import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import connectionsList from './connections-list.js';

export default combineReducers({
  form,
  connectionsList
});