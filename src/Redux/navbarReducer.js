import {usersApi} from "../API/api";

let initialState = {
    Friends: [
    ],
    id: ''
}

const navReducer = (state = initialState, action) => {
    switch(action.type){
        case 'RequestFriends':
            return  {...state, Friends: action.Friends}
        case 'setProfileFriends':
            return {...state, id: action.id}
          default :
            return state
    }
}
export const setFriends = (Friends) => ({type: 'RequestFriends',Friends})
export const setProfileFriends = (id) => ({type: 'setProfileFriends', id})
export const requestFriendsAC = () => (dispatch) => {
    usersApi.requestFriends().then(data => dispatch(setFriends(data.items)))
}


export default navReducer;