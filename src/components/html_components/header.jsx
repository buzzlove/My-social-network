import React from 'react';
import './../../App.css';

const Header = () => {
    return (
        <div className = 'Header'>
            <img src = { require( './../../img/logo.png')} alt = 'logo' ></img>
        </div>
    )
}

export default Header;