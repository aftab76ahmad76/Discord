import { createStore, compose } from "redux";
import reducers from "../reducers";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    : (a) => a;

const middleware = compose(applyMiddleware(thunk), devTools);

const store = createStore(reducers, middleware)

export default store