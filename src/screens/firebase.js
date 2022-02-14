import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
//import { initializeApp } from "firebase/app"
//import "firebase/compat/auth"
//import "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAOjmtKuzkog_KNCUWMQkgvLmg_qWpyjPw",
    authDomain: "ready-set-learn.firebaseapp.com",
    projectId: "ready-set-learn",
    storageBucket: "ready-set-learn.appspot.com",
    messagingSenderId: "217037053743",
    appId: "1:217037053743:web:6136bee23914259d9dcbda",
    measurementId: "G-W34P05QMK8"
}; 

const app = firebase.initializeApp(firebaseConfig); 

const storage = getStorage(app); 
const auth = app.auth();
const db = app.firestore();



export {
  storage,
  auth,
  db,
};