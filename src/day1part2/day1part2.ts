export const day1part2 = (data: string[]) => {
  let score = 50
  let answer = 0
  let rotations = 0

  function first(s: string): number {
    if (s.length <= 3) {
      return 0;
    }
    const digits = s.slice(1);
    const result = digits.slice(0, -2);
    return +result;
  }

  function split(s: string): number {
    if (s[0] == "R") {
      return +s.slice(1)
    } else {
      return -s.slice(1)
    }
  }

  const firstNumber = data.map(first);
  const hundreds = firstNumber.reduce((total, n) => total + n, 0)

  const rotation = data.map(split);

  for (let i = 0; i < rotation.length; i++) {
    rotations = rotation[i] % 100
    score = + (score + rotations)

    if (score < 0 && ((score - rotations) == 0)) { score = score + 100 }
    else if (score < 0) { score = score + 100, answer = answer + 1 }
    else if (score >= 100) { score = score - 100, answer = answer + 1 }
    else if (rotations == 0) { score = score }
    else if (score == 0) { answer = answer + 1 }

  }
  answer = answer + hundreds
  console.log(hundreds)
  // console.log(answer)
  return answer;
};
