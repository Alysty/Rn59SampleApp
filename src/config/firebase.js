import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDNHbF8mWfsGqEHgvqhz_1BuKoscFCrHN4",
    authDomain: "bookmanager-41418.firebaseapp.com",
    databaseURL: "https://bookmanager-41418.firebaseio.com",
    projectId: "bookmanager-41418",
    storageBucket: "bookmanager-41418.appspot.com",
    messagingSenderId: "426887807497",
    appId: "1:426887807497:web:e2ce674a1e6c8478986ed8",
    measurementId: "G-D076VH3QP2"
};

export default firebase.initializeApp(firebaseConfig);