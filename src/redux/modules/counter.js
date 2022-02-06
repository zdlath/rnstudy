//Action 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//Action 생성 함수 정의
export const createIncreaseAction = () => {
  console.log("1. increase Action 생성 함수 호출");
  const action = { type: INCREASE };
  console.log("  [return] action : ", action.type);
  return action;
};
export const createDecreaseAction = () => {
  console.log("1. decrease Action 생성 함수 호출");
  const action = { type: DECREASE };
  console.log("  [return] action : ", action.type);
  return action;
};

//State 초기값 정의
const initialState = {
    number: 0
};

//Reducer 정의
export default function counterReducer(state = initialState, action) {
  console.log("4. counter Reducer 호출");
  console.log("  [parameter] previoudState : ", state);
  console.log("  [parameter] action : ", action.type);

  let newState;
  switch (action.type) {
    case INCREASE:
      newState = {
        ...state,
        number: state.number + 1
      };
      break;
    case DECREASE:
      newState = {
        ...state,
        number: state.number - 1
      };
      break;
    default:
      newState = state;
      break;
  }

  console.log("  [return] newState : ", newState);
  return newState;
}