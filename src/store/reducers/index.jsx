import postReducer from "./post";
import storyReducer from "./story";
import userReducer from "./user";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    post: postReducer,
    story: storyReducer,
    user: userReducer,
})

export default allReducers;

