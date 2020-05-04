import { increment, decreament, reset } from "./actions/counter";
import store from "./store";

// 打印初始状态
console.log(store.getState());

// 每次state更新时，打印日志
// 注意subcribe()返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// 发起一系列action
store.dispatch(increment());
store.dispatch(decreament());
store.dispatch(reset());

// 停止监听state更新
unsubscribe();
