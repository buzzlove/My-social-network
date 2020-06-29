import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";



export const WithAuthRedirect = WrapperComponent => {
    class RedirectComp extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/Авторизация'/>
            return <WrapperComponent {...this.props}/>
        }
    }

    let mapStateToPropsForRedirect = (state) => ({isAuth: state.auth.isAuth})
    return connect(mapStateToPropsForRedirect)(RedirectComp);
}
