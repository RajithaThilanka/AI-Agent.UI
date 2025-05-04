import { combineReducers } from "@reduxjs/toolkit";
import { aiAgentApi } from "../api";
import chatReducer from "./slices/chatSlice";

const rootReducer = combineReducers({
  [aiAgentApi.reducerPath]: aiAgentApi.reducer,
  chat: chatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
