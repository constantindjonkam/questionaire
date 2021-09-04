import {
  collection,
  getDocs,
  addDoc,
  where,
  query,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
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

const getUserResults = (user: string, setUserResults: (res: UserResult[]) => void) => {
  const q = query(collection(db, "results"), where("user", "==", user));

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const userResults = [] as UserResult[];

    querySnapshot.forEach((doc) => {
      userResults.push(doc.data() as UserResult);
    });

    setUserResults(userResults);
  });

  return unsubscribe;
};

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
