import {getLogin} from "./Redux/authReducer";
let SetInitialized = 'SetInitialized'
let initialState = {
initialized: false
}
const AppReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SetInitialized':
            return {...state, initialized: true}
        default: return state
    }
}

export const IniSuccess = () => ({type: SetInitialized});

export const initializeApp = () => (dispatch) => {

    Promise.all([dispatch(getLogin())]).then(()=>{dispatch(IniSuccess());})
}



export default AppReducer;