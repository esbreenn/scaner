// firebase.js
// Debe cargarse DESPUÉS de los scripts compat en index.html

const firebaseConfig = {
  apiKey:             "AIzaSyBtbiJpjiVsfhUVmnF23huJLyYOw5tikB0",
  authDomain:         "scanner-prueba-f3ae0.firebaseapp.com",
  projectId:          "scanner-prueba-f3ae0",
  storageBucket:      "scanner-prueba-f3ae0.appspot.com",
  messagingSenderId:  "578819836928",
  appId:              "1:578819836928:web:f496190221317d372fdce5"
};

// Inicializa Firebase y Firestore (compat)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Exportamos la instancia de Firestore
export { db };
