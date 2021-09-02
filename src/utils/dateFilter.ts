import { UserResult } from "../firebase";

export const orderByDate = (results: UserResult[], order = 1) => {
  // 0 for ascending ---- 1 for descending order(default)
  if (order === 1) return results.sort((a, b) => b.created.seconds - a.created.seconds);
  return results.sort((a, b) => b.created.seconds - a.created.seconds);
};
