function createStore() {
  let state;
  let handlers = []; //구독함수들 배열로 저장

  function send(action) {
    state = worker(state,action);
    handlers.forEach((handler) => handler());
  }
  function getState() {
    return state;
  }
  function subscribe(handler) {
    //함수를 구독할테니 데이터가 바뀌면 그 함수를 호출
    handlers.push(handler); //내부의 핸들러스에 추가
  }
  return {
    send,
    getState,
    subscribe,
  };
}

function worker(state = { count: 0 }) {
    switch(action.type){
        case 'increase':return { ...state, count: state.count + 1 }; //얕은복사
        //실행할때마다 count 1씩증가
        default :
        {...state}
    }
    }


    //상태를 바꾸는 함수는 새로운 상태를 반환
  //예상치 못한 side Effect 를 원천적으로 차단
    if(action.type ==='increase'){
        
    }
  
 
}

const store = createStore(worker);

store.subscribe(function () {
  console.log(store.getState());
});

store.send({type :'increase'});//Redux가 제안하는 작은 구조적인 약속 {type :''}
store.send({type :'increase'});//Redux가 제안하는 작은 구조적인 약속 {type :''}
store.send({type :''});
