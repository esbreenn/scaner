// firebase.js
// 1) Asume que ya cargaste firebase-app-compat.js y firebase-firestore-compat.js en tu HTML.

// 2) Tu configuración:
const firebaseConfig = {
  apiKey:             "AIzaSyBtbiJpjiVsfhUVmnF23huJLyYOw5tikB0",
  authDomain:         "scanner-prueba-f3ae0.firebaseapp.com",
  projectId:          "scanner-prueba-f3ae0",
  storageBucket:      "scanner-prueba-f3ae0.appspot.com",
  messagingSenderId:  "578819836928",
  appId:              "1:578819836928:web:f496190221317d372fdce5"
};

// 3) Inicializa Firebase + Firestore
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 4) Lo pegamos al `window` para usarlo desde cualquier script
window.db = db;
