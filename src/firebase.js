import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC86xMEuPHSFcfgwsGaiintliiI6lLEkGE",
  authDomain: "test-55bb0.firebaseapp.com",
  databaseURL: "https://test-55bb0.firebaseio.com",
  projectId: "test-55bb0",
  storageBucket: "test-55bb0.appspot.com",
  messagingSenderId: "250834127642",
  appId: "1:250834127642:web:d28256dcbf26e613757aa3",
  measurementId: "G-WQHK6ZM61V"
};

firebase.initializeApp(config);

const firestore = new firebase.firestore();

export { firestore };
