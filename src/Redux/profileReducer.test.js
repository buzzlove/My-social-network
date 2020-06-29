import profileReducer, {AddPostFunc, deletePost} from "./profileReducer";
let state = {
    PostData: [
        {id: 0, message: "Как дела?", likescount: 11},
        {id: 1, message: "Хорошо", likescount: 14}],
}
test('length of post should be increment', () => {
    //1. test data
    let action = AddPostFunc('testReducer')

    //2.Action
    let newState = profileReducer(state,action);

    //3. expections
   expect(newState.PostData.length).toBe(3);

})

test('message of post should be testReducer', () => {
    //1. test data
    let action = AddPostFunc('testReducer')

    //2.Action
    let newState = profileReducer(state,action);

    //3. expections
    expect(newState.PostData[0].message).toBe("testReducer");
})

test('after deleting length of post should be decrement', () => {
    //1. test data
    let action = deletePost(1)

    //2.Action
    let newState = profileReducer(state,action);

    //3. expections
    expect(newState.PostData.length).toBe(1);
})

test('after deleting length of post should not be  if id is incorrect', () => {
    //1. test data
    let action = deletePost(1)

    //2.Action
    let newState = profileReducer(state,action);

    //3. expections
    expect(newState.PostData.length).toBe(1);
})