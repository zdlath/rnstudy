import {createAction, handleActions} from 'redux-actions';

//Action 타입 정의
const INCREASE2 = 'counter/INCREASE2';
const DECREASE2 = 'counter/DECREASE2';

//Action 생성 함수 정의
export const INCREASE2_ACTION = createAction(INCREASE2);
export const DECREASE2_ACTION = createAction(DECREASE2);

//State 초기값 정의
const initialState = {
  number: 0,
};

//Reducer 정의
const counter2Reducer = handleActions(
  {
    [INCREASE2]: (state, action) => {
      console.log('3. counter2 Reducer 호출');
      console.log('  [parameter] previousState : ', state);
      console.log('  [parameter] action : ', action);
      let newState = {...state, number: state.number + 1};
      console.log('  [return] newState : ', newState);
      return newState;
    },
    [DECREASE2]: (state, action) => {
      console.log('3. counter2 Reducer 호출');
      console.log('  [parameter] previousState : ', state);
      console.log('  [parameter] action : ', action);
      let newState = {...state, number: state.number - 1};
      console.log('  [return] newState : ', newState);
      return newState;
    },
  },
  initialState,
);
export default counter2Reducer;
