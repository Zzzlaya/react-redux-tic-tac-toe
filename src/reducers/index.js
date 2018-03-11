import { combineReducers } from 'redux';
import gridReducer from './GridReducer';
import gameResultReducer from './GameResultReducer';

const reducer = combineReducers({
  gridReducer,
  gameResultReducer
});

export default reducer;
