import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwSBYV2oINA0SU7mUeNcwJeIlQlX8QELw",
  authDomain: "vuetodo-d4e38.firebaseapp.com",
  projectId: "vuetodo-d4e38",
  storageBucket: "vuetodo-d4e38.appspot.com",
  messagingSenderId: "487338128305",
  appId: "1:487338128305:web:eb32e1af306f1ccb99c390",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}