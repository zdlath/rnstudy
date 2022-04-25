const Middleware2 = store => next => action => {
  //Reducer가 호출되기 전에 사전 작업 추가
  console.log('[Middleware2] Reducer가 호출되기 전에 사전 작업');

  //next() 함수를 통해 다음 Middleware에게 Action을 전달합니다.
  //다음 Middleware가 없다면 Reducer에게 Action을 전달합니다.
  const result = next(action);

  //Reducer가 호출된 후에 사후 작업 추가
  console.log('[Middleware2] Reducer가 호출된 후에 사후 작업');
  return result;
};

export default Middleware2;
