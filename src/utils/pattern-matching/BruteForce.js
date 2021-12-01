export const BruteForce = (text, pattern) => {
  const lengthOfText = text.length;
  const lengthOfPattern = pattern.length;

  const occurrences = [];

  for (let i = 0; i < lengthOfText; i++) {
    for (let j = 0; j < lengthOfPattern; j++) {
      if (text[i + j] !== pattern[j]) {
        break;
      }
      if (j === lengthOfPattern - 1) {
        occurrences.push(i);
      }
    }
  }
  console.log(occurrences);
  return occurrences;
};
