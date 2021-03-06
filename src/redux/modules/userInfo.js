import {createAction, handleActions} from 'redux-actions';

//Action 타입 정의
const CHANGE_NAME = 'userInfo/CHANGE_NAME';
const CHANGE_AGE = 'userInfo/CHANGE_AGE';

//Action 생성 함수 정의
//redux-actions 적용한 소스
export const CHANGE_NAME_ACTION = createAction(CHANGE_NAME, newName => newName);
export const CHANGE_AGE_ACTION = createAction(CHANGE_AGE, newAge => newAge);
//redux-actions 적용하지 않은 소스
// export const createChangeNameAction = newName => {
//   console.log('1. changeName Action 생성 함수 호출');
//   const action = {
//     type: CHANGE_NAME,
//     newName,
//   };
//   console.log('  [return] action : ', action);
//   return action;
// };
// export const crateChangeAgeAction = newAge => {
//   console.log('1. changeAge Action 생성 함수 호출');
//   const action = {
//     type: CHANGE_AGE,
//     newAge,
//   };
//   console.log('  [return] action : ', action);
//   return action;
// };

//State 초기값 정의
const initialState = {
  name: '임소희',
  age: 30,
};

//Reducer 정의
//redux-actions 적용한 소스
const userInfoReducer = handleActions(
  {
    [CHANGE_NAME]: (state, action) => {
      console.log('3. userInfo Reducer 호출');
      console.log('  [parameter] previousState : ', state);
      console.log('  [parameter] action : ', action);
      let newState;
      newState = {...state, name: action.payload};
      console.log('  [return] newState : ', newState);
      return newState;
    },
    [CHANGE_AGE]: (state, action) => {
      console.log('3. userInfo Reducer 호출');
      console.log('  [parameter] previousState : ', state);
      console.log('  [parameter] action : ', action);
      let newState;
      newState = {...state, age: action.payload};
      console.log('  [return] newState : ', newState);
      return newState;
    },
  },
  initialState,
);
export default userInfoReducer;
//redux-actions 적용하지 않은 소스
// export default function userInfoReducer(state = initialState, action) {
//   console.log('3. userInfo Reducer 호출');
//   console.log('  [parameter] previousState : ', state);
//   console.log('  [parameter] action : ', action);
//
//   let newState;
//   switch (action.type) {
//     case CHANGE_NAME:
//       newState = {
//         ...state,
//         name: action.newName,
//       };
//       break;
//     case CHANGE_AGE:
//       newState = {
//         ...state,
//         age: action.newAge,
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
