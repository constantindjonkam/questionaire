import {
  collection,
  getDocs,
  addDoc,
  where,
  query,
  serverTimestamp,
} from "firebase/firestore/lite";
import { db } from "../firebase";
import { ResultProp } from "../components/TableBody";
import { orderByDate } from "../utils/dateFilter";
import { pointsCalculator } from "../utils/pointsCalulator";

export interface UserResult {
  avoidance: number;
  intrusions: number;
  cognitions: number;
  hypervigilance: number;
  result: ResultProp[];
  total: number;
  user: string;
  created: { seconds: number; nanoseconds: number };
}

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

async function getUserResults(user: string) {
  const results = [] as UserResult[];
  const q = query(collection(db, "results"), where("user", "==", user));

  try {
    const resultSnapshot = await getDocs(q);
    resultSnapshot.forEach((doc) => results.push(doc.data() as UserResult));
  } catch (error) {
    console.log("Could not get user results from db");
  }

  return orderByDate(results);
}

async function addResult(user: string, result: ResultProp[]) {
  const total = result.reduce((a, c) => Number(c.value) + a, 0);
  const avoidance = pointsCalculator(result, 1, 5);
  const intrusions = pointsCalculator(result, 6, 7);
  const cognitions = pointsCalculator(result, 8, 14);
  const hypervigilance = pointsCalculator(result, 15, 20);

  try {
    await addDoc(collection(db, "results"), {
      user,
      result: result,
      avoidance,
      intrusions,
      cognitions,
      hypervigilance,
      total,
      created: serverTimestamp(),
    });
  } catch (error) {
    console.log("Could not add result to db");
  }
}

export { getResults, addResult, getUserResults };
