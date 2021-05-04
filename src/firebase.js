// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBdyHQEZl5KrfMex-QegfR6jsmUQweqd4I",
//     authDomain: "todo-react-app-69594.firebaseapp.com",
//     projectId: "todo-react-app-69594",
//     storageBucket: "todo-react-app-69594.appspot.com",
//     messagingSenderId: "323616665541",
//     appId: "1:323616665541:web:9a3a77d80e8cc4ccdea5ac",
//     measurementId: "G-9SFS5S4PJS"
//   };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdyHQEZl5KrfMex-QegfR6jsmUQweqd4I",
    authDomain: "todo-react-app-69594.firebaseapp.com",
    projectId: "todo-react-app-69594",
    storageBucket: "todo-react-app-69594.appspot.com",
    messagingSenderId: "323616665541",
    appId: "1:323616665541:web:9a3a77d80e8cc4ccdea5ac",
    measurementId: "G-9SFS5S4PJS"
})

const db = firebaseApp.firestore();

export default db ;