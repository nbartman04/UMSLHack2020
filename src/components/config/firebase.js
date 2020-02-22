import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'

const Config = {
  
  apiKey: "AIzaSyB4P5O5LQ4tue5IuY8xmsP3MJ4x3DaSnAE",
  authDomain: "umslhack2020.firebaseapp.com",
  databaseURL: "https://umslhack2020.firebaseio.com",
  projectId: "umslhack2020",
  storageBucket: "umslhack2020.appspot.com",
  messagingSenderId: "336095097968",
  appId: "1:336095097968:web:4ea0a643202414e8f9f0b5"

}

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;