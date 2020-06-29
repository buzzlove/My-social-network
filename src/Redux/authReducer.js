import {authApi, usersApi} from "../API/api"
import {stopSubmit} from "redux-form"
import {requestFriendsAC, setFriends} from "./navbarReducer";
import {setUserProfile} from "./profileReducer";

let SET_USER_DATA = '/auth/SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case '/auth/SET_USER_DATA':
            return {...state, ...action.data, isAuth: action.isAuth}
        default:
            return state
    }
};

export const setUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {id, email, login}, isAuth
});
export const getLogin = () => async (dispatch) => {
    let response = await usersApi.getAuthMe()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setUserData(id, email, login, true))
        dispatch(requestFriendsAC())
    }
};

export const setLogin = (email, password, rememberMe) => async (dispatch) => {
    let response = await authApi.loginOn(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getLogin())
    } else {
        dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
    }
};
export const disLogin = () => async (dispatch) => {
    let response = await authApi.loginOut();

    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
        dispatch(setFriends(null))
        dispatch(setUserProfile(null))
    }
};


export default authReducer