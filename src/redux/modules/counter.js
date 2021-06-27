//액션 타입 선언
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성함수 선언
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//초기값 선언
const initialState = {
    number: 0
};

//리듀서 선언
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      console.log("[LOG] counter 리듀서의 INCREASE 액션 호출");
      return {
        ...state,
        number: state.number + 1
      };
    case DECREASE:
      console.log("[LOG] counter 리듀서의 DECREASE 액션 호출");
      return {
        ...state,
        number: state.number - 1
      };
    default:
      return state;
  }
}