import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getUserResults, UserResult } from "../services/userResults";

const useUserResults = () => {
  const [results, setResults] = useState<UserResult[] | null>(null);
  const latestResult = results && results[0];
  const params = useParams();

  useEffect(() => {
    const unsubscribe = getUserResults((params as { id: string }).id, setResults);

    return unsubscribe;
  }, [params]);

  return { results, latestResult };
};

export default useUserResults;
