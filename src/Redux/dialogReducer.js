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
        {name: 'Света', id: 'Света'}]
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AddMessage':
            return {
                ...state,
                MessagesOld: [...state.MessagesOld,
                    {message: action.Message, id: 3}]
            };
        default:
            return state;
    }
}
export const addMassage = (Message) => ({type: 'AddMessage', Message});

export default dialogReducer;