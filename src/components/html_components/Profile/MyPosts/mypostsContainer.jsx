import React from 'react';
import {
    addPostActionCreator,
    deletePostActionCreator,
    onPostChangeActionCreator
} from "../../../../Redux/profileReducer";
import MyPosts from "./myposts";

    const MyPostsContainer = (props) => {
        let state = props.store.getState();
    let AddPostFunc = () => {props.store.dispatch(addPostActionCreator());}
    let DeletePostFunc = () => {props.store.dispatch(deletePostActionCreator());}
    let OnPostChange = (text) => {props.store.dispatch(onPostChangeActionCreator(text));}

    return (
        <div >
           <MyPosts AddPostFunc={AddPostFunc} DeletePostFunc={DeletePostFunc}
                    OnPostChange={OnPostChange} ProfilePage={state.ProfilePage}
                    postText={state.ProfilePage.PostText}
                    PostData={state.ProfilePage.PostData}/>
        </div>
    )
}

export default MyPostsContainer;