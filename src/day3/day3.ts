export const day3 = (data: string[]) => {
  let answer = 0

  function findHighNumber(s: string[]): number {
    for (let x = 0; x < s.length; x++) {
      let stringDigits = s[x].toString()
      let digits = stringDigits.split('')


      let firstHigh = +digits[0]


      let position = 0

      for (let i = 0; i < digits.length - 2; i++) {
        if (+digits[i + 1] > firstHigh) { firstHigh = +digits[i + 1]; position = i + 1 }
      }

      let secondHigh = +digits[position + 1]

      console.log("break")

      for (let i = position + 1; i < digits.length; i++) {
        if (+digits[i + 1] > secondHigh) { secondHigh = +digits[i + 1] }
        ;
      }

      answer = answer + Number(String(firstHigh) + String(secondHigh));
      console.log(answer)

    }
    return answer
  }

  findHighNumber(data)
  //console.log(data)

  return answer;
};
