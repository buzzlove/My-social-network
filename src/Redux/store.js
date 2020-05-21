import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import navReducer from "./navbarReducer";

const store =  {
    _state: {
        ProfilePage: {
            PostData: [
                {id: 0, message: "Как дела?", likescount: 11},
                {id: 1, message: "Хорошо", likescount: 14}],
            PostText: ['']
        },
        DialogsPage: {
            MessagesOld: [
                {message: 'Привет', id: 0},
                {message: 'Как дела', id: 1},
                {message: 'Чем занимаешься?', id: 2}]
            ,
            User: [
                {name: 'Андрей', id: 'Андрей'},
                {name: 'Сергей', id: 'Сергей'},
                {name: 'Алексей', id: 'Алексей'},
                {name: 'Сергей', id: 'Сергей'},
                {name: 'Василий', id: 'Василий'},
                {name: 'Света', id: 'Света'}],
            MessageText: ['']
        },
        NavBarPage: {
            Friends: [
                {name: 'Вася'},
                {name: 'Петя'},
                {name: 'Женя'}
            ]
        }
    },
    _callSubscriber () {  },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    GetState(){
       return this._state;
    },

    dispatch(action) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.DialogsPage = dialogReducer(this._state.DialogsPage, action);
        this._state.NavBarPage  = navReducer(this._state.NavBarPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;