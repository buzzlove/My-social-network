import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '3f7c7d58-d7f2-4bf3-9f16-f169a0f9cb52'}
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data)
    },
    getAuthMe() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    postFollow(usersId) {
        return instance.post(`follow/${usersId}`)
    },
    deleteFollow(usersId) {
        return instance.delete(`follow/${usersId}`)
    },
    requestFriends(count = 15) {
        return instance.get(`users?count=${count}&friend=true`,
        ).then(response => response.data)
    }

}

export const profileApi = {
    apiGetProfileUser(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status})
    }
}

export const authApi = {
    loginOn(email, password, rememberMe = false) {
        return instance.post('/auth/login', {email, password, rememberMe})
    },
    loginOut() {
        return instance.delete('/auth/login')
    }
}

