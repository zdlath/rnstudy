import {createAction, handleActions} from 'redux-actions';

//Action 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//Action 생성 함수 정의
//redux-actions 적용한 소스
export const INCREASE_ACTION = createAction(INCREASE);
export const DECREASE_ACTION = createAction(DECREASE);
//redux-actions 적용하지 않은 소스
// export const createIncreaseAction = () => {
//   console.log('1. increase Action 생성 함수 호출');
//   const action = {type: INCREASE};
//   console.log('  [return] action : ', action);
//   return action;
// };
// export const createDecreaseAction = () => {
//   console.log('1. decrease Action 생성 함수 호출');
//   const action = {type: DECREASE};
//   console.log('  [return] action : ', action);
//   return action;
// };

//State 초기값 정의
const initialState = {
  number: 0,
};

//Reducer 정의
//redux-actions 적용한 소스
const counterReducer = handleActions(
  {
    [INCREASE]: (state, action) => {
      console.log('3. counter Reducer 호출');
      console.log('  [parameter] previousState : ', state);
      console.log('  [parameter] action : ', action);
      let newState;
      newState = {...state, number: state.number + 1};
      console.log('  [return] newState : ', newState);
      return newState;
    },
    [DECREASE]: (state, action) => {
      console.log('3. counter Reducer 호출');
      console.log('  [parameter] previousState : ', state);
      console.log('  [parameter] action : ', action);
      let newState;
      newState = {...state, number: state.number - 1};
      console.log('  [return] newState : ', newState);
      return newState;
    },
  },
  initialState,
);
export default counterReducer;
//redux-actions 적용하지 않은 소스
// export default function counterReducer(state = initialState, action) {
//   console.log('3. counter Reducer 호출');
//   console.log('  [parameter] previousState : ', state);
//   console.log('  [parameter] action : ', action);
//
//   let newState;
//   switch (action.type) {
//     case INCREASE:
//       newState = {
//         ...state,
//         number: state.number + 1,
//       };
//       break;
//     case DECREASE:
//       newState = {
//         ...state,
//         number: state.number - 1,
//       };
//       break;
//     default:
//       newState = state;
//       break;
//   }
//
//   console.log('  [return] newState : ', newState);
//   return newState;
// }
