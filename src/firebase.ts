import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore/lite";

import { ResultProp } from "./components/TableBody";

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
const db = getFirestore(app);

async function getResults() {
  const resultsCol = collection(db, "results");
  try {
    const resultSnapshot = await getDocs(resultsCol);
    const resultList = resultSnapshot.docs.map((doc) => doc.data());
    return resultList;
  } catch (error) {
    console.log("Could not get results from db");
  }
}

async function addResult(user: string, result: ResultProp[], total: number) {
  try {
    await addDoc(collection(db, "results"), {
      user,
      result: result,
      total,
    });
  } catch (error) {
    console.log("Could not add result to db");
  }
}

export { getResults, addResult };
