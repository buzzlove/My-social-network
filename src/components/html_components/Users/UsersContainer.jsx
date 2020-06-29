import React from "react";
import {connect} from "react-redux";
import {
    follow,
    followInProgress, getUsers,
} from "../../../Redux/usersReducer";
import Users from "./Users";
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
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
        }

    onPageChange = (page) => {
        let pageSelected  = (page.selected+1)
        let {pageSize} = this.props
        this.props.getUsers((pageSelected), pageSize);
 }

    render() {
        return (
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
                    isFetching = {this.props.isFetching}
                   />)
    }
}

let mapStateToProps=(state)=>{
    return{
        users: getUsersState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        inProgress: getInProgress(state),
        isAuth: getIsAuth(state),
    }
}

export default compose(connect(mapStateToProps, {
    follow ,followInProgress,getUsers})
    )(UsersContainer);

