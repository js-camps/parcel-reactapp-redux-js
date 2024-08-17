import { combineReducers } from 'redux';
import calcReducer from './calcReducer';
const rootReducer = combineReducers({
  counter: calcReducer
});

export default rootReducer;