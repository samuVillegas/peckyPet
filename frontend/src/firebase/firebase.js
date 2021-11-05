import firebase from "firebase"

const firebaseConfig  = {
  apiKey: "AIzaSyA7VDIEw50NA6QFnclpkvYX595oNtpkiX0",
  authDomain: "peckypet.firebaseapp.com",
  projectId: "peckypet",
  storageBucket: "peckypet.appspot.com",
  messagingSenderId: "48817779278",
  appId: "1:48817779278:web:acf1a7b933942d0dad891f",
  measurementId: "G-LT0L13YHYT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

var storage = firebase.storage();


export {
  storage
}






