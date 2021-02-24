import { createStore } from "redux";
import { reducer } from "./reducers/reducer";

let data = {
  userInfo: null,
  userPosts: null,
  users: null,
  userId: 6,
  postComments: null,
};
export let store = createStore(reducer, data);
export let stateStore = createStore(reducer, data);
