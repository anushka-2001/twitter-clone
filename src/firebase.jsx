// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaZeDAlN1CQJ32LAO9AYd0Et7aRw35b2M",
  authDomain: "tweet-72b98.firebaseapp.com",
  projectId: "tweet-72b98",
  storageBucket: "tweet-72b98.appspot.com",
  messagingSenderId: "579720875587",
  appId: "1:579720875587:web:697f613621ef96920e0ef6",
  measurementId: "G-MW16JX4KVV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
