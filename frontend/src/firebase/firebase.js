import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA7VDIEw50NA6QFnclpkvYX595oNtpkiX0",
  authDomain: "peckypet.firebaseapp.com",
  projectId: "peckypet",
  storageBucket: "peckypet.appspot.com",
  messagingSenderId: "48817779278",
  appId: "1:48817779278:web:2351a464fc1594a6ad891f",
  measurementId: "G-1FRBYYZMN6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

var storage = firebase.storage();


export {
  storage
}






