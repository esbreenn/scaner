// firebase.js
// Asume que app-compat y firestore-compat ya se cargaron en index.html

const firebaseConfig = {
  apiKey:             "AIzaSyBtbiJpjiVsfhUVmnF23huJLyYOw5tikB0",
  authDomain:         "scanner-prueba-f3ae0.firebaseapp.com",
  projectId:          "scanner-prueba-f3ae0",
  storageBucket:      "scanner-prueba-f3ae0.appspot.com",
  messagingSenderId:  "578819836928",
  appId:              "1:578819836928:web:f496190221317d372fdce5"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
window.db = db;
