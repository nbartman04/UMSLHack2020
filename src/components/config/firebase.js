import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'

const Config = {
    apiKey: "AIzaSyDTINdQiTiumyE8D-GMjFSfkWx2r2ITOAc",
    authDomain: "windsor-lake-rod-and-gun-club.firebaseapp.com",
    databaseURL: "https://windsor-lake-rod-and-gun-club.firebaseio.com",
    projectId: "windsor-lake-rod-and-gun-club",
    storageBucket: "windsor-lake-rod-and-gun-club.appspot.com",
    messagingSenderId: "501704003181",
    appId: "1:501704003181:web:612bd71f3c8531ad387964",
    measurementId: "G-ZQJ8QFVG95"
}

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;