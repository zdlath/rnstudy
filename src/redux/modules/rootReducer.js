import {combineReducers} from 'redux';
import counterReducer from './counter';
import counter2Reducer from './counter2';
import counter3Reducer, { counterSaga } from "./counter3";
import userInfoReducer from './userInfo';
import userInfo2Reducer from './userInfo2';
import {penderReducer} from 'redux-pender';
import promiseDataReducer from './promiseData';
import { all } from 'redux-saga/effects';

//combineReducers() 함수를 이용하여 여러개의 Reducer를 합칩니다.
//합쳐진 Reducer를 rootReducer라고 부릅니다.
const rootReducer = combineReducers({
  counterReducer,
  counter2Reducer,
  counter3Reducer,
  userInfoReducer,
  userInfo2Reducer,
  promiseDataReducer,
  pender: penderReducer,
});

//all() 함수를 이용하여 여러개의 Saga를 합칩니다.
//합쳐진 Saga를 rootSaga라고 부릅니다.
export function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootReducer;
