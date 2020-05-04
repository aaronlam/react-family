import { combineReducers } from "redux";
import counter from "./reducers/counter";
import userInfo from "./reducers/userInfo";

// 2
// 使用redux提供的combineReducers函数来合并reducer
export default combineReducers({
  counter,
  userInfo
});

// 1
/*export default function combineReducers(state = {}, action) {
  return {
    counter: counter(state.counter, action),
    userInfo: userInfo(state.userInfo, action)
  };
}*/
