import { useEffect, useState } from "react";

import { getUserResults, UserResult } from "../services/userResults";

const useUserResults = (params: object) => {
  const [results, setResults] = useState<UserResult[]>([]);
  const latestResult = results[0];

  useEffect(() => {
    getUserResults((params as { id: string }).id)
      .then((res) => setResults(res)) //orderByDate(
      .catch(() => console.log("could not get user results"));
  }, [params]);

  return { results, latestResult };
};

export default useUserResults;
