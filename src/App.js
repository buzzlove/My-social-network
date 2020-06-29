import React, {Suspense} from 'react';
import './App.css';

import {BrowserRouter, Route, withRouter} from "react-router-dom";
import NavContainer from "./components/html_components/Navigation/Menu/navContainer";
import UsersContainer from "./components/html_components/Users/UsersContainer";
import HeaderContainer from "./components/html_components/Header/headerContainer";
import AuthContainer from "./components/html_components/Auth/AuthContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/html_components/Common/Preloader/preloader";
import {initializeApp} from "./AppReducer";
import ProfileContainerHook from "./components/html_components/Profile/profileContainerHook";
import store from "./Redux/reduxStore";

const Dialogs = React.lazy(() => import('./components/html_components/Dialogs/dialogs'));
const Music = React.lazy(() => import('./components/html_components/Music/Music'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (<div className='app-wrapper'>
            <HeaderContainer/>
            <NavContainer/>
            <Suspense fallback={<Preloader/>}>

                    <Route path='/Сообщения' render={() => <Dialogs/>}/>
                    <Route path='/Музыка' render={() => <Music/>}/>

            </Suspense>

            <Route path='/Профиль/:userId?' render={() => <ProfileContainerHook/>}/>
            <Route path='/Пользователи' render={() => <UsersContainer/>}/>
            <Route path='/Авторизация' render={() => <AuthContainer/>}/>

        </div>)
    }
}

const mapStateToProps = (state) => ({initialized: state.APP.initialized, auth: state.auth.isAuth})
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


export const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}