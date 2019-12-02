import {combineReducers} from 'redux';
import errorMessage from './errorMessage';
import drawer from './drawer';

export default combineReducers({
  errorMessage,
  drawer,
});
