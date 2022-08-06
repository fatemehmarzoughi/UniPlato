import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

const reducers = combineReducers({
    postsStates: postsReducer,
})

export default reducers;