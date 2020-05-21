import React from 'react';
import './App.css';
import NavBar from './components/html_components/Navigation/nav';
import Profile from './components/html_components/Profile/profile';
import Header from './components/html_components/Header/header';
import Dialogs from './components/html_components/Dialogs/dialogs';
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar store={props.store}/>
                <Route path='/Сообщения' render={() => <Dialogs store={props.store}
                                                               />}/>
                <Route path='/Профиль' render={() => <Profile store={props.store}/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;

