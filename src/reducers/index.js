import {combineReducers} from 'redux';
import newBookForm from './newBookForm';
import userReducer from './userReducer';


export default combineReducers({
    user: userReducer,
    bookForm: newBookForm
});