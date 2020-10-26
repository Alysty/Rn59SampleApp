import React from 'react';
import Router from './Router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(rootReducer, applyMiddleware(thunk));

const BooksApp = prop =>(
    <Provider store = {store}>
        <Router />
    </Provider>
    
)
export default BooksApp;