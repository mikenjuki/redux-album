import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { usersReducer } from "./slices/usersSlice";

const rootReducer = combineReducers({
  users: usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
