import {createAction, handleActions} from 'redux-actions';

//Action 타입 정의
const CHANGE_NAME2 = 'userInfo/CHANGE_NAME2';
const CHANGE_AGE2 = 'userInfo/CHANGE_AGE2';

//Action 생성 함수 정의
export const CHANGE_NAME2_ACTION = createAction(CHANGE_NAME2, newName => newName);
export const CHANGE_AGE2_ACTION = createAction(CHANGE_AGE2, newAge => newAge);

//State 초기값 정의
const initialState = {
  name: '임소희',
  age: 30,
};

//Reducer 정의
const userInfo2Reducer = handleActions(
  {
    [CHANGE_NAME2]: (state, action) => {
      console.log('3. userInfo2 Reducer 호출');
      console.log('  [parameter] previousState : ', state);
      console.log('  [parameter] action : ', action);
      let newState;
      newState = {...state, name: action.payload};
      console.log('  [return] newState : ', newState);
      return newState;
    },
    [CHANGE_AGE2]: (state, action) => {
      console.log('3. userInfo2 Reducer 호출');
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
export default userInfo2Reducer;
