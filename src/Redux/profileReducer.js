import {profileApi} from "../API/api";

const ADD_POST = '/profileReducer/ADD_POST';
const SetUserProfileAC = '/profileReducer/SetUserProfileAC';
const SetUserStatus = '/profileReducer/SetUserStatus';
const deletePostAC = '/profileReducer/deletePost';

let initialState = {
    PostData: [
        {id: 0, message: "Как дела?", likescount: 11},
        {id: 1, message: "Хорошо", likescount: 14}],
    Profile: null,
    Status: '',
    id: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case '/profileReducer/ADD_POST':
            return {
                ...state, PostData: [{
                    id: 2,
                    message: action.postMessage,
                    likescount: 0
                }, ...state.PostData]
            };
        case '/profileReducer/SetUserProfileAC':
            return {...state, Profile: action.profile}
        case '/profileReducer/SetUserStatus':
            return {...state, Status: action.status}
        case '/profileReducer/deletePost':
            return {...state, PostData: state.PostData.filter(post => post.id !== action.id)}
        default:
            return state;
    }
};

export const AddPostFunc = (postMessage) => ({type: ADD_POST, postMessage});
export const setUserProfile = (profile) => ({type: SetUserProfileAC, profile});
export const setUserStatusAC = (status) => ({type: SetUserStatus, status});
export const deletePost = (id) => ({type: deletePostAC, id});

export const getProfileUser = (userId) => async (dispatch) => {
    if (!userId) {
        userId = 8508
    }
    let response = await profileApi.apiGetProfileUser(userId)
    dispatch(setUserProfile(response.data))
};
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getStatus(userId)
    dispatch(setUserStatusAC(response.data))
};
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatusAC(status))
    }
};

export default profileReducer;