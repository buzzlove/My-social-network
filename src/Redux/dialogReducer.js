const addMessage = 'AddMessage';
const addEnterMessage = 'AddEnterMessageText';
let initialState = {
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
    MessageText: ''
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'AddMessage':
            let newMessage = {
                message: state.MessageText,
                id: 2
            };
            state.MessagesOld.push(newMessage);
            state.MessageText = "";
            return state;
        case 'AddEnterMessageText':
            state.MessageText = action.text;
            return state;
        default:
            return state;
    }
}

export const addMassageActionCreator = () => ({type: addMessage});
export const addEnterMessageTextActionCreator = (text) => ({type: addEnterMessage, text: text});

export default dialogReducer;