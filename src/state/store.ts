import {applyMiddleware, combineReducers, createStore} from "redux";
import counterReducer from "./counter-reducer";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type RootStateType = ReturnType<typeof rootReducer>;