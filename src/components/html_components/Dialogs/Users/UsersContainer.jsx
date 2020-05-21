import React from 'react';
import Users from "./Users";

const UsersContainer = (props) => {
let state = props.store.getState().DialogsPage;
    return (
        <div>
            <Users User={state.User}/>
        </div>
    )
}

export default UsersContainer;