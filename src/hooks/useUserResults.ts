import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getUserResults, UserResult } from "../services/userResults";

const useUserResults = () => {
  const [results, setResults] = useState<UserResult[]>([]);
  const latestResult = results[0];
  const params = useParams();

  useEffect(() => {
    (async () => {
      const res = await getUserResults((params as { id: string }).id);
      setResults(res);
    })();
  }, [params]);

  return { results, latestResult };
};

export default useUserResults;
