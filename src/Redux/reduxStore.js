import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import navReducer from "./navbarReducer";
import UsersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
import AppReducer from "../AppReducer";

let reducers = combineReducers(
    {
       ProfilePage: profileReducer,
        DialogsPage: dialogReducer,
        NavbarPage: navReducer,
        UsersPage: UsersReducer,
        auth: authReducer,
        form: formReducer,
        APP: AppReducer
    }
);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.__store__ = store;
export default store;