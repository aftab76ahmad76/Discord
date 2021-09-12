import { combineReducers } from "redux";
import sideBarReducer from './sideBarReducer'
import chatReducer from './chatReducer'
const reducers = combineReducers({
    sideBar: sideBarReducer,
    chat: chatReducer
})

export default reducers