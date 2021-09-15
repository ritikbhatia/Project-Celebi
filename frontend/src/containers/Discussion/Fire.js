import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyASe8fP_Fv1S6oBuwRIaH4abKJ5V6s2jP4",
  authDomain: "project-celebi-325804.firebaseapp.com",
  projectId: "project-celebi-325804",
  storageBucket: "project-celebi-325804.appspot.com",
  messagingSenderId: "200126695645",
  appId: "1:200126695645:web:4f8850a3113cdc22d17334",
  measurementId: "G-ZVVZL6LSVH",
};

const initFirebase = firebase.initializeApp(firebaseConfig);
const db = initFirebase.firestore();

export default db;