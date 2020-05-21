const ADD_POST = 'ADD_POST';
const addEnterText = 'AddEnterText';
const DeleteEnterText = 'DeleteEnterText'


let initialState = {
    PostData: [
        {id: 0, message: "Как дела?", likescount: 11},
        {id: 1, message: "Хорошо", likescount: 14}],
    PostText: ''
}


const profileReducer = (state = initialState ,action) => {

    switch(action.type) {
        case 'ADD_POST':
          let newPost = {
                        id: 2,
                        message: state.PostText,
                        likescount: 0
                            };
          state.PostData.push(newPost);
          state.PostText = "";
          return state;

        case 'AddEnterText':
            state.PostText = action.text;
            return state;
        case 'DeleteEnterText':
            state.PostText = "";

        default:
            return state;
        }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const deletePostActionCreator = () => ({type: DeleteEnterText});
export const onPostChangeActionCreator = (text) => ({type: addEnterText, text: text });

export default profileReducer;