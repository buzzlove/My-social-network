import React from "react";
import {connect} from "react-redux";
import {
    follow,
    followInProgress, getUsers, unfollow,

} from "../../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/preloader";
import {compose} from "redux";
import {
    getCurrentPage, getInProgress, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersState
} from "../../../Redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        }


    onPageChange = (page) => {
        this.props.getUsers(page, this.props.pageSize);}

    render() {

        return <>
            {this.props.isFetching ? <Preloader/>
                :
                <Users
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChange={this.onPageChange}
                    getPagesNumber={this.getPagesNumber}
                    followInProgress={this.props.followInProgress}
                    inProgress = {this.props.inProgress}
                    pageSize={ this.props.pageSize}

                   />}
        </>
    }
}

/*const mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        inProgress: state.UsersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
};*/

let mapStateToProps=(state)=>{
    return{
        users: getUsersState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        inProgress: getInProgress(state),
        isAuth: getIsAuth(state)
    }
}

export default compose(connect(mapStateToProps, {
    follow ,unfollow,followInProgress,getUsers})
    )(UsersContainer);

