const questionsData = [
  {
    type: "avoidance",
    questions: [
      "Repeated, disturbing, and unwanted memories of the stressful experience?",
      "Repeated, disturbing dreams of the stressful experience?",
      "Suddenly feeling or acting as if the stressful experience were actually happening again (as if you were actually back there reliving it)?",
      "Feeling very upset when something reminded you of the stressful experience?",
      "Having strong physical reactions when something reminded you of the stressful experience (for example, heart pounding, trouble breathing, sweating)?",
    ],
  },
  {
    type: "intrusions",
    questions: [
      "Avoiding memories, thoughts, or feelings related to the stressful experience?",
      "Avoiding external reminders of the stressful experience (for example, people, places, conversations, activities, objects, or situations)?",
    ],
  },
  {
    type: "cognitions",
    questions: [
      "Trouble remembering important parts of the stressful experience?",
      "Having strong negative beliefs about yourself, other people, or the world (for example, having thoughts such as: I am bad, there is something seriously wrong with me, no one can be trusted, the world is completely dangerous)?",
      "Blaming yourself or someone else for the stressful experience or what happened after it?",
      "Having strong negative feelings such as fear, horror, anger, guilt, or shame?",
      "Loss of interest in activities that you used to enjoy?",
      "Feeling distant or cut off from other people?",
      "Trouble experiencing positive feelings (for example, being unable to feel happiness or have loving feelings for people close to you)?",
    ],
  },
  {
    type: "hypervigilance",
    questions: [
      "Irritable behavior, angry outbursts, or acting aggressively?",
      "Taking too many risks or doing things that could cause you harm?",
      "Being “superalert”or watchful or on guard?",
      "Feeling jumpy or easily startled?",
      "Having difficulty concentrating?",
      "Trouble falling or staying asleep?",
    ],
  },
];

export const getAllQuestions = () => {
  const allQuestions = [];

  for (let i = 0; i < questionsData.length; i++) {
    allQuestions.push(...questionsData[i].questions);
  }

  return allQuestions;
};

export const getAllTypes = () => {
  const allTypes = [];

  for (let i = 0; i < questionsData.length; i++) {
    allTypes.push(questionsData[i].type);
  }

  return allTypes;
};

export default questionsData;
