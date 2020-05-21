import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/reduxStore";

export const rerenderTree = () => {
    ReactDOM.render(
        <App store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderTree(store.getState());

store.subscribe( () => {
   // let state = store.getState();
    rerenderTree();
});