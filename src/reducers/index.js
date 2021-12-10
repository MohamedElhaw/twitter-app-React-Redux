import { combineReducers } from "redux";
import tweets from "./tweets";
import users from "./users";
import authorId from "./author";

export default combineReducers({
    tweets,
    users,
    authorId
}
);