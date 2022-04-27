import {createAction, handleActions} from 'redux-actions';
import {pender} from 'redux-pender';
import axios from 'axios';

function getDataAPI(postId) {
  console.log('3. getDataAPI 호출');
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

//Action 타입 정의
const GET_DATA = 'promiseData/GET_DATA';

//Action 생성 함수 정의
export const GET_DATA_ACTION = createAction(GET_DATA, getDataAPI);

//State 초기값 정의
const initialState = {
  resultCode: 0,
  title: '',
  body: '',
  loading: false,
};

//Reducer 정의
const promiseDataReducer = handleActions(
  {
    ...pender({
      type: GET_DATA,
      onPending: (state, action) => {
        console.log('4. onPending() 호출');
        console.log('  [parameter] previousState : ', state);
        console.log('  [parameter] action : ', action);
        const newState = {
          ...state,
          loading: true,
        };
        console.log('  [return] newState : ', newState);
        return newState;
      },
      onSuccess: (state, action) => {
        console.log('4. onSuccess() 호출');
        console.log('  [parameter] previousState : ', state);
        console.log('  [parameter] action : ', action);
        const {title, body} = action.payload.data;
        const newState = {
          ...state,
          resultCode: 0,
          title: title,
          body: body,
          loading: false,
        };
        console.log('  [return] newState : ', newState);
        return newState;
      },
      onFailure: (state, action) => {
        console.log('4. onFailure() 호출');
        console.log('  [parameter] previousState : ', state);
        console.log('  [parameter] action : ', action);
        const newState = {
          ...state,
          resultCode: -1,
          loading: false,
        };
        console.log('  [return] newState : ', newState);
        return newState;
      },
    }),
  },
  initialState,
);
export default promiseDataReducer;
