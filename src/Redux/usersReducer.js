import {usersApi} from "../API/api";
import {requestFriendsAC} from "./navbarReducer";

const SET_USERS = '/usersReducer/SET_USERS';
const GET_TOTAL_USERS = '/usersReducer/GET_TOTAL_USERS';
const NEW_PAGE = '/usersReducer/NEW_PAGE';
const TOGGLE_ISFETCHING = '/usersReducer/TOGGLE_ISFETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = '/usersReducer/TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],

};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {

        case '/usersReducer/SET_USERS': {
            return {...state, users: action.users}
        }
        case '/usersReducer/GET_TOTAL_USERS': {
            return {...state, totalUsersCount: action.count}
        }
        case '/usersReducer/NEW_PAGE': {
            return {...state, currentPage: action.page}
        }
        case '/usersReducer/TOGGLE_ISFETCHING':
            return {...state, isFetching: action.isFetching}
        case '/usersReducer/TOGGLE_FOLLOWING_IN_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFollow ? [...state.followingInProgress, action.usersId]
                    : [state.followingInProgress.filter(id => id !== action.usersId)]

            }
        default:
            return state;
    }
}


export const setUsers = (users) => ({type: SET_USERS, users});
export const totalCount = (count) => ({type: GET_TOTAL_USERS, count});
export const newPage = (page) => ({type: NEW_PAGE, page});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_ISFETCHING, isFetching})
export const followInProgress = (isFollow, usersId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFollow, usersId})

export const getUsers = (currentPage, pageSize) => async(dispatch) => {
        dispatch(toggleIsFetching(true));
     let response = await usersApi.getUsers(currentPage, pageSize)
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(totalCount(response.totalCount));
            dispatch(newPage(currentPage))
    }
export const follow = (userId,followValue,currentPage,pageSize) => async(dispatch) => {
        dispatch(followInProgress(true, userId));
            let response;
            !followValue ? response = await usersApi.postFollow(userId)
                         : response = await usersApi.deleteFollow(userId)
            dispatch(followInProgress(false, userId));
            if (response.data.resultCode === 0) {
                dispatch(requestFriendsAC())
                dispatch(getUsers(currentPage,pageSize))
            }

}


export default UsersReducer;