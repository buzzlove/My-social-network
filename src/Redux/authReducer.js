import {authApi, usersApi} from "../API/api"
import {stopSubmit} from "redux-form"

let SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: null,
    isAuth: false
}

const authReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'SET_USER_DATA':
            return {...state, ...action.data, isAuth: action.isAuth}
        case 'AuthStateOff':
            return{...state, isAuth: false}
        default:
            return state
    }
}

export const setUserData = (id, email,login, isAuth) => ({type: SET_USER_DATA,
                            data: {id, email, login},isAuth})

export const getLogin = () => (dispatch) => {

      return usersApi.getAuthMe().then(payload => {
            if (payload.resultCode === 0){
                let {id , email, login} = payload.data;
                dispatch(setUserData(id , email, login, true))}
        })


}
export const setLogin = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.loginOn(email, password, rememberMe).then(data => {
            if(data.data.resultCode === 0){dispatch(getLogin())}
            else {
                dispatch(stopSubmit('login', {_error: data.data.messages[0]}))
            }
        })}
    }
export const disLogin = () => {
    return (dispatch) => {
    authApi.loginOut().then(data=>{
        if(data.data.resultCode === 0){
            dispatch(setUserData(null , null, null, false))}
    })}
}


export default authReducer