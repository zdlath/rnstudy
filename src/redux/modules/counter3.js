import {createAction, handleActions} from 'redux-actions';
import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';

//Action 타입 정의
const INCREASE3 = 'counter/INCREASE3';
const DECREASE3 = 'counter/DECREASE3';
const INCREASE3_ASYNC = 'counter/INCREASE3_ASYNC';
const DECREASE3_ASYNC = 'counter/DECREASE3_ASYNC';

//Action 생성 함수 정의
export const INCREASE3_ACTION = createAction(INCREASE3);
export const DECREASE3_ACTION = createAction(DECREASE3);
export const INCREASE3_ASYNC_ACTION = createAction(INCREASE3_ASYNC);
export const DECREASE3_ASYNC_ACTION = createAction(DECREASE3_ASYNC);

//Worker Saga 정의
//put : 특정 액션을 디스패치 합니다.
//takeEvery : 모든 액션을 처리합니다.
//takeLatest : 가장 마지막으로 디스패치된 액션을 처리합니다.
function* increaseSaga() {
  console.log('3. increaseSaga 호출');
  yield delay(1000);
  yield put(INCREASE3_ACTION());
}
function* decreaseSaga() {
  console.log('3. decreaseSaga 호출');
  yield delay(1000);
  yield put(DECREASE3_ACTION());
}
export function* counterSaga() {
  console.log('3. counterSaga 호출');
  yield takeEvery(INCREASE3_ASYNC_ACTION, increaseSaga);
  yield takeLatest(DECREASE3_ASYNC_ACTION, decreaseSaga);
}

//State 초기값 정의
const initialState = {
  number: 0,
};

//Reducer 정의
const counter3Reducer = handleActions(
  {
    [INCREASE3]: (state, action) => {
      console.log('3. counter3 Reducer 호출');
      console.log('  [parameter] previousState : ', state);
      console.log('  [parameter] action : ', action);
      let newState = {...state, number: state.number + 1};
      console.log('  [return] newState : ', newState);
      return newState;
    },
    [DECREASE3]: (state, action) => {
      console.log('3. counter3 Reducer 호출');
      console.log('  [parameter] previousState : ', state);
      console.log('  [parameter] action : ', action);
      let newState = {...state, number: state.number - 1};
      console.log('  [return] newState : ', newState);
      return newState;
    },
  },
  initialState,
);
export default counter3Reducer;
