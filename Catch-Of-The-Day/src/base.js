import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDn4bPgaw_ZymoSusIoI6enUaRtW1BkmjE",
    authDomain: "catch-of-the-day-6b44d.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-6b44d-default-rtdb.firebaseio.com",

});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
