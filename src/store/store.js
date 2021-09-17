import {combineReducers, createStore} from "redux";
import {board} from "./board/reducer.js";

const store = createStore(
    combineReducers({
        board
    })
);

export default store;