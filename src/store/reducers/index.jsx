import postReducer from "./post";
import storyReducer from "./story";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    post: postReducer,
    story: storyReducer,
})

export default allReducers;

