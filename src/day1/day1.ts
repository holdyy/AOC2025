
export const day1 = (data: string[]) => {
  let score = 50
  let answer = 0

  function split(s: string): number {
    if (s[0] == "R") {
      return +s.slice(1)
    } else {
      return -s.slice(1)
    }
  }

  const rotation = data.map(split);

  for (let i = 0; i < rotation.length; i++) {
    score = + (score + rotation[i])
    score = score % 100
    if (score < 0) { score = score + 100 }
    else if (score >= 100) { score = score - 100 }
    if (score == 0) { answer = answer + 1 }

  }
  return answer;
};
