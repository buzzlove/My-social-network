import {usersApi} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const GET_TOTAL_USERS = 'GET_TOTAL_USERS';
const NEW_PAGE = 'NEW_PAGE';
const TOGGLE_ISFETCHING = 'TOGGLE_ISFETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {...users, followed: true};
                    } else return users;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {...users, followed: false};
                    } else return users;
                })
            }
        case 'SET_USERS': {
            return {...state, users: action.users}
        }
        case 'GET_TOTAL_USERS': {
            return {...state, totalUsersCount: action.count}
        }
        case 'NEW_PAGE': {
            return {...state, currentPage: action.page}
        }
        case 'TOGGLE_ISFETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE_FOLLOWING_IN_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFollow ? [...state.followingInProgress, action.usersId]
                    : [state.followingInProgress.filter(id => id !== action.usersId)]

            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const totalCount = (count) => ({type: GET_TOTAL_USERS, count});
export const newPage = (page) => ({type: NEW_PAGE, page});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_ISFETCHING, isFetching})
export const followInProgress = (isFollow, usersId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFollow, usersId})

export const getUsers = (currentPage, pageSize) => (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(totalCount(data.totalCount));
            dispatch(newPage(currentPage))
        })
    }
export const follow = (userId) => (dispatch) => {
        dispatch(followInProgress(true, userId));
        usersApi.postFollow(userId).then(data => {
                dispatch(followInProgress(false, userId));
                if (data.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                    }
                                                })
}
export const unfollow = (userId) => (dispatch) => {
        dispatch(followInProgress(true, userId));
        usersApi.deleteFollow(userId).then(data => {
            dispatch(followInProgress(false, userId))
            if (data.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
        })
    }

export default UsersReducer;