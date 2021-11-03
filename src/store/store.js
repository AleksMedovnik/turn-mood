import { combineReducers, createStore } from "redux";
import chatReducer from "./reducers/chatReducer";
import homeReducer from "./reducers/homeReducer";
import profileReducer from "./reducers/profileReducer";

const reducers = combineReducers({
    home: homeReducer,
    profile: profileReducer,
    chat: chatReducer,
})
const store = createStore(reducers)
export default store
window.store = store