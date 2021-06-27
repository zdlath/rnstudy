//액션 타입 선언
const CHANGE_NAME = 'userInfo/CHANGE_NAME';
const CHANGE_AGE = 'userInfo/CHANGE_AGE';

//액션 생성함수 선언
export const changeName = (newName) => ({ 
    type: CHANGE_NAME,
    newName
});
export const changeAge = (newAge) => ({ 
    type: CHANGE_AGE,
    newAge
});

//초기값 선언
const initialState = {
    name: '임소희',
    age: 30
};

//리듀서 선언
export default function changeUserInfo(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      console.log("[LOG] userInfo 리듀서의 CHANGE_NAME 액션 호출");
      return {
        ...state,
        name: action.newName
      };
    case CHANGE_AGE:
      console.log("[LOG] userInfo 리듀서의 CHANGE_AGE 액션 호출");
      return {
        ...state,
        age: action.newAge
      };
    default:
      return state;
  }
}