const Middleware1 = store => next => action => {
    console.log("3. Middleware1 호출");
    console.log("  [parameter] action : ", action);

    //Reducer가 호출되기 전에 사전 작업 추가
    console.log("Reducer가 호출되기 전에 사전 작업 1...");
    
    //next() 함수를 통해 다음 Middleware에게 Action을 전달합니다.
    //다음 Middleware가 없다면 Reducer에게 Action을 전달합니다.
    const result = next(action);

    //Reducer가 호출된 후에 사후 작업 추가
    console.log("Reducer가 호출된 후에 사후 작업 1...");

    console.log("  [return] result (Middleware1) : ", result);
    return result;
  };
  
  export default Middleware1;