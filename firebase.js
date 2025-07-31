// firebase.js
// 1) SDKs de compatibilidad
import "https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js";
import "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore-compat.js";

// 2) Configuración e init
const firebaseConfig = {
  apiKey: "…",
  authDomain: "scanner-prueba-f3ae0.firebaseapp.com",
  projectId: "scanner-prueba-f3ae0",
  storageBucket: "scanner-prueba-f3ae0.appspot.com",
  messagingSenderId: "578819836928",
  appId: "1:578819836928:web:f496190221317d372fdce5"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
