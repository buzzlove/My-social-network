import React from 'react';
import './App.css';
import Dialogs from './components/html_components/Dialogs/dialogs';
import {Route, withRouter} from "react-router-dom";
import NavContainer from "./components/html_components/Navigation/Menu/navContainer";
import UsersContainer from "./components/html_components/Users/UsersContainer";
import ProfileContainer from "./components/html_components/Profile/profileContainer";
import HeaderContainer from "./components/html_components/Header/headerContainer";
import AuthContainer from "./components/html_components/Auth/AuthContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/html_components/Common/Preloader/preloader";
import {initializeApp} from "./AppReducer";
import Music from "./components/html_components/Music/Music";

class App extends React.Component {
componentDidMount() {
    this.props.initializeApp();
}

    render() {
        if(!this.props.initialized) {
           return <Preloader/>
        }

            return (<div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavContainer/>
                    <Route path='/Сообщения' render={() => <Dialogs/>}/>
                    <Route path='/Профиль/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/Пользователи' render={() => <UsersContainer/>}/>
                    <Route path='/Авторизация' render={() => <AuthContainer/>}/>
                    <Route path='/Музыка' render={()=><Music/>}/>
                    </div>)
    }
}
const mapStateToProps = (state) => ({initialized: state.APP.initialized,auth: state.auth.isAuth})
export default compose(
        withRouter,
        connect(mapStateToProps, {initializeApp}))(App);


