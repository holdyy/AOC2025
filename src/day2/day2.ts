export const day2 = (data: string[]) => {
  let answer = 0

  function getRangesString(s: string): string[] {
    return s.split("-")
  }

  function getRangesNumber(s: string): number[] {
    const range = s.split("-");
    return range.map(Number);
  }

  function doesStringRepeat(s: string): boolean {
    return /^(.+)\1+$/.test(s);
  }

  function doesHalfStringRepeat(s: string): boolean {
    const length = s.length / 2
    const firstHalf = s.slice(0, length)
    const secondHalf = s.slice(length, s.length)
    if (firstHalf == secondHalf) {
      return true
    } else return false;
  }

  const rangesString = data.map(getRangesString)
  const rangesNumber = data.map(getRangesNumber)

  // part 1
  // for (let i = 0; i < rangesNumber.length; i++) {
  //   for (let x = rangesNumber[i][0]; x <= rangesNumber[i][1]; x++) {

  //     const numberString = x.toString()
  //     if (doesHalfStringRepeat(numberString)) { answer = x + answer }
  //   }

  // }

  // part 2
  for (let i = 0; i < rangesNumber.length; i++) {
    for (let x = rangesNumber[i][0]; x <= rangesNumber[i][1]; x++) {

      const numberString = x.toString()
      if (doesStringRepeat(numberString)) { answer = x + answer }
    }

  }

  return answer;
};
