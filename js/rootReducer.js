import { combineReducers } from 'redux';

import ChartReducer from './Components/Chart/reducer';
import UserStatusReducer from './Components/AppWrapper/reducer';
export default combineReducers({
  UserStatusReducer,
  ChartReducer
});
