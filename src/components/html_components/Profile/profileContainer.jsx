/*import React from "react"
import Profile from "./profile"
import {connect} from "react-redux"
import {getProfileUser, getStatus, getUserId, updateStatus} from "../../../Redux/profileReducer"
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {userId = this.props.userId;}
        this.props.getProfileUser(userId);
        this.props.getStatus(userId);
        this.props.getUserId(userId);
    }
    componentDidUpdate(prevProps, prevState) {
        let userId = this.props.match.params.userId;
        if(prevProps.userId!== this.props.userId) {
        this.props.getProfileUser(userId);
        }
    }

    render() {return <Profile {...this.props}/>}
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.Profile,
    status: state.ProfilePage.Status,
    userId: state.auth.id,
    id: state.ProfilePage.id
})

export default compose(connect(mapStateToProps,{getUserId,getProfileUser,getStatus,updateStatus}),withRouter
   ,WithAuthRedirect
)(ProfileContainer);*/
