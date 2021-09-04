import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoPVoF4dQYw9HICIBT6YMrejiyUMpnYzQ",
  authDomain: "questionnaire-d6ac5.firebaseapp.com",
  projectId: "questionnaire-d6ac5",
  storageBucket: "questionnaire-d6ac5.appspot.com",
  messagingSenderId: "351056793440",
  appId: "1:351056793440:web:97a40e74be025e1dc91805",
  measurementId: "G-M0DQVY4Q5Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
