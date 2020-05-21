import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import navReducer from "./navbarReducer";

let reducers = combineReducers(
    {
       ProfilePage: profileReducer,
        DialogsPage: dialogReducer,
        NavbarPage: navReducer
    }
);


let store = createStore(reducers);

export default store;