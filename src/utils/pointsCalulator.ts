import { ResultProp } from "../components/TableBody";

export const pointsCalculator = (results: ResultProp[], start: number, end: number) => {
  start--;
  end--;

  return results.reduce((a, c, i) => {
    if (i >= start && i <= end) return Number(c.value) + a;
    else return a;
  }, 0);
};
