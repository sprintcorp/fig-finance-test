import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {createEventReducer, eventReducers} from "./reducers/EventReducers";
import {categoryReducers} from "./reducers/CategoryReducers";

const reducer = combineReducers({
    eventList: eventReducers,
    categoryList: categoryReducers,
    eventCreate: createEventReducer,
});
const initialState = {};

const middleware = [thunk];


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
