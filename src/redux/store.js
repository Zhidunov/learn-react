import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profileReducer.js";
import { dialogsReducer } from "./dialogsReducer.js";
import { sidebarReducer } from "./sidebarReducer.js";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer
});

let store = createStore(reducers);

export default store;
