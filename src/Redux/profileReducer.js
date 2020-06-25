import {profileApi, usersApi} from "../API/api";

const ADD_POST = 'ADD_POST';
const SetUserProfileAC = 'SetUserProfileAC';
const SetUserStatus = 'SetUserStatus';

let initialState = {
    PostData: [
        {id: 0, message: "Как дела?", likescount: 11},
        {id: 1, message: "Хорошо", likescount: 14}],
    Profile: null,
    Status: ''
}

const profileReducer = (state = initialState ,action) => {

    switch(action.type) {
        case 'ADD_POST':
            return {
                ...state, PostData : [{id: 2,
                    message: action.postMessage,
                    likescount: 0},...state.PostData]
                     };
        case 'SetUserProfileAC':
            return {...state, Profile: action.profile}
        case 'SetUserStatus':
            return {...state, Status: action.status}

            default:
            return state;

        }
}

export const AddPostFunc = (postMessage) => ({type: ADD_POST, postMessage});
export const setUserProfile = (profile) =>({type: SetUserProfileAC, profile});
export const setUserStatusAC = (status) =>({type: SetUserStatus, status})

export const getProfileUser = (userId) => (dispatch) => {
        if (!userId){userId = 8508}
        usersApi.apiGetProfileUser(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
export const getStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId).then(response => {
        dispatch(setUserStatusAC(response.data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status).then(response => {
        if (response.data.resultCode === 0){
            dispatch(setUserStatusAC(status))
        }
    })
}

export default profileReducer;