import React, {useEffect} from "react"
import Profile from "./profile"
import {connect} from "react-redux"
import {getProfileUser, getStatus, updateStatus} from "../../../Redux/profileReducer"
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";

const ProfileContainerHook = ({getStatus,getProfileUser,...props})=> {

    let userId = props.match.params.userId
    if (!userId) {userId = props.userId}

    useEffect(()=>{
        getProfileUser(userId)
        getStatus(userId)
    },[getProfileUser,getStatus,userId])


    return <Profile {...props}/>
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.Profile,
    status: state.ProfilePage.Status,
    userId: state.auth.id,
    id: state.ProfilePage.id
})

export default compose(connect(mapStateToProps,{getProfileUser,getStatus,updateStatus}),withRouter
   ,WithAuthRedirect
)(ProfileContainerHook);
