// ================================================================
// FIREBASE CONFIGURATION
// ================================================================
// Replace the values below with your own Firebase project settings.
// Go to Firebase Console > Project Settings > General > Your apps > Config

const firebaseConfig = {
  apiKey: "AIzaSyCaKyJ7vPOp5ce6Tc0aZauwRTNs7Tx9hWg",
  authDomain: "english-grammar-game.firebaseapp.com",
  projectId: "english-grammar-game",
  storageBucket: "english-grammar-game.firebasestorage.app",
  messagingSenderId: "833245928824",
  appId: "1:833245928824:web:dde0b047f3c488a214fc8d",
  measurementId: "G-FDP19SG4HT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export references for use in other files (if using modules, but we use global)
// For compatibility, we attach to window so app.js can access.
window.firebaseApp = firebase;
window.auth = firebase.auth();
window.db = firebase.firestore();