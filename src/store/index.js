import { createStore, combineReducers } from "redux";
import { imageReducer } from "./imageReducer";
import { userReducer } from "./userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    image: imageReducer,
    user: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools())