export const getUsersState = (state) => {
    return state.UsersPage.users
}

export const getPageSize = (state) => {
    return state.UsersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.UsersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.UsersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.UsersPage.isFetching
}
export const getInProgress = (state) => {
    return state.UsersPage.followingInProgress
}
export const getIsAuth = (state) => {
    return state.auth.isAuth
}

