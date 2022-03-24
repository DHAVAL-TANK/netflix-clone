import firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyCbVaaKehfjn9V5xowvF7y9CYahqwKXugM",
    authDomain: "netflix-c4865.firebaseapp.com",
    projectId: "netflix-c4865",
    storageBucket: "netflix-c4865.appspot.com",
    messagingSenderId: "297282018869",
    appId: "1:297282018869:web:762ed42c69add119659b7c",
    measurementId: "G-NCY6YRK24D"
  };  
  
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
