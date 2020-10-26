import firebase from '../config/firebase';
import { Alert } from 'react-native';
export const USER_LOGIN = 'USER_LOGIN';

const userLogin = user =>({
    type:USER_LOGIN,
    user
})
export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT,
})

export const processLogin = ({email, password}) => dispatch => {
    return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      const action = userLogin(user);
      dispatch(action);
    })
   .catch(error => { 
      return Promise.reject(error);
    })
}