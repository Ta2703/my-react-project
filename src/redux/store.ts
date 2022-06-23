import { configureStore, combineReducers } from "@reduxjs/toolkit";

import postsReducer from "./reducers/postsReducer";

import authReducer from "./reducers/authReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/rootSaga";

function counterReducer(state = { value: 0 }, action: any) {
    switch (action.type) {
      case "counter/incremented":
        console.log("PLUS")
        return { value: state.value + 1 };
      case "counter/decremented":
        console.log("MINUS")
        return { value: state.value - 1 };
      default:
        return state;
    }
  }
  const sagaMiddleware = createSagaMiddleware();
  
  
  const rootReducer = combineReducers({
    posts: postsReducer,
    auth: authReducer,
  });
  
  export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);