import { UserResult } from "../services/userResults";

export const colorDeterminer = (latestResult: UserResult) => {
  if (latestResult.total > 50) return "red";
  else if (latestResult.total > 25) return "blue";
  return "green";
};

export const severityDeterminer = (latestResult: UserResult) => {
  if (latestResult.total > 50) return "High";
  else if (latestResult.total > 25) return "Medium";
  return "Low";
};

export const resultMessageDeterminer = (results: UserResult[], latestResult: UserResult) => {
  let resultMessage = "";
  const end =
    "You need to consult or follow a Doctor instructions immidiately. Failing to do so might result to Chronic illness, emotional problems or even death";

  if (results.length === 1) resultMessage += "You have successfully completed your first survey. ";
  if (latestResult.total > 50)
    resultMessage += "Your score shows that you are suffering from excessive stress. " + end;
  else if (latestResult.total > 25)
    resultMessage += "Your score shows that you are suffering from some stress. " + end;
  else
    resultMessage +=
      "Your score shows that you are quiet stressed up. It is at a beginning stage. You need to follow some recommended guidelines from a Doctor. Failing to do so might result into more serious stress and can lead to Chronic illness, emotional problems or even death";

  return resultMessage;
};

export const scoreComparator = (results: UserResult[]) => {
  if (results.length < 2) return "You don't have any record yet. This is your first survey";

  if (results[0].total > results[1].total)
    return "You are experiencing an increased in stress. Please consult a doctor immidiately.";
  else if (results[0].total < results[1].total)
    return "You are starting to feel better. Please keep up!";

  return "No improvement on your health detected. Please consult a doctor immidiately to check if everything is alright.";
};

export const resultColorDeterminer = (value: number) => {
  if (value >= 10) return { color: "white", backgroundColor: "red" };
  if (value >= 5) return { color: "black", backgroundColor: "yellow" };
  return { color: "white", backgroundColor: "green" };
};
