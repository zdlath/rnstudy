//Action 타입 정의
const CHANGE_NAME = 'userInfo/CHANGE_NAME';
const CHANGE_AGE = 'userInfo/CHANGE_AGE';

//Action 생성 함수 정의
export const createChangeNameAction = (newName) => {
  console.log("1. changeName Action 생성 함수 호출");
  const action = { 
    type: CHANGE_NAME,
    newName
  };
  console.log("  [return] action : ", action.type);
  return action;
}
export const crateChangeAgeAction = (newAge) => {
  console.log("1. changeAge Action 생성 함수 호출");
  const action = { 
    type: CHANGE_AGE,
    newAge
  };
  console.log("  [return] action : ", action.type);
  return action;
}

//State 초기값 정의
const initialState = {
    name: '임소희',
    age: 30
};

//Reducer 정의
export default function userInfoReducer(state = initialState, action) {
  console.log("4. userInfo Reducer 호출");
  console.log("  [parameter] previoudState : ", state);
  console.log("  [parameter] action : ", action.type);

  let newState;
  switch (action.type) {
    case CHANGE_NAME:
      newState = {
        ...state,
        name: action.newName
      };
      break;
    case CHANGE_AGE:
      newState = {
        ...state,
        age: action.newAge
      };
      break;
    default:
      newState = state;
      break;
  }
  
  console.log("  [return] newState : ", newState);
  return newState;
}