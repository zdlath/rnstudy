import {combineReducers} from 'redux';
import counterReducer from './counter';
import userInfoReducer from './userInfo';

//combineReducers() 함수를 이용하여 여러개의 Reducer를 합칩니다.
//합쳐진 Reducer를 rootReducer라고 부릅니다.
const rootReducer = combineReducers({
  counterReducer,
  userInfoReducer,
});

export default rootReducer;
