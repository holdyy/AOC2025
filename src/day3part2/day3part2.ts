export const day3part2 = (data: string[]) => {
  let answer = 0

  function findHighNumber(s: string[]): number {
    for (let x = 0; x < s.length; x++) {
      let stringDigits = s[x].toString()
      let digits = stringDigits.split('')

      console.log(digits)


      let h1 = +digits[0]


      let position = 0

      for (let i = 0; i < digits.length - 13; i++) {
        if (+digits[i + 1] > h1) { h1 = +digits[i + 1]; position = i + 1 }
        console.log(h1)
      }


      let h2 = 1

      for (let i = position; i < digits.length - 11; i++) {
        if (+digits[i + 1] > h2) { h2 = +digits[i + 1]; position = i + 1 }
        ;
        console.log(h2)

      }

      let h3 = 1

      console.log(h3)

      for (let i = position; i < digits.length - 10; i++) {
        if (+digits[i + 1] > h3) { h3 = +digits[i + 1]; position = i + 1 }
        ;
      }

      // h4
      let h4 = 1

      for (let i = position; i < digits.length - 9; i++) {
        if (+digits[i + 1] > h4) {
          h4 = +digits[i + 1];
          position = i + 1;
        }
      }

      // h5
      let h5 = 1

      for (let i = position; i < digits.length - 8; i++) {
        if (+digits[i + 1] > h5) {
          h5 = +digits[i + 1];
          position = i + 1;
        }
      }

      // h6
      let h6 = 1

      for (let i = position; i < digits.length - 7; i++) {
        if (+digits[i + 1] > h6) {
          h6 = +digits[i + 1];
          position = i + 1;
        }
      }

      // h7
      let h7 = 1

      for (let i = position; i < digits.length - 6; i++) {
        if (+digits[i + 1] > h7) {
          h7 = +digits[i + 1];
          position = i + 1;
        }
      }

      // h8
      let h8 = 1

      for (let i = position; i < digits.length - 5; i++) {
        if (+digits[i + 1] > h8) {
          h8 = +digits[i + 1];
          position = i + 1;
        }
      }

      // h9
      let h9 = 1

      for (let i = position; i < digits.length - 4; i++) {
        if (+digits[i + 1] > h9) {
          h9 = +digits[i + 1];
          position = i + 1;
        }
      }

      // h10
      let h10 = 1

      for (let i = position; i < digits.length - 3; i++) {
        if (+digits[i + 1] > h10) {
          h10 = +digits[i + 1];
          position = i + 1;
        }
      }

      // h11
      let h11 = 1

      for (let i = position; i < digits.length - 2; i++) {
        if (+digits[i + 1] > h11) {
          h11 = +digits[i + 1];
          position = i + 1;
        }
      }

      // h12
      let h12 = 1

      for (let i = position; i < digits.length - 1; i++) {
        if (+digits[i + 1] > h12) {
          h12 = +digits[i + 1];
          position = i + 1;
        }
      }

      answer = answer + Number(
        String(h1) +
        String(h2) +
        String(h3) +
        String(h4) +
        String(h5) +
        String(h6) +
        String(h7) +
        String(h8) +
        String(h9) +
        String(h10) +
        String(h11) +
        String(h12)
      );

      console.log(Number(
        String(h1) +
        String(h2) +
        String(h3) +
        String(h4) +
        String(h5) +
        String(h6) +
        String(h7) +
        String(h8) +
        String(h9) +
        String(h10) +
        String(h11) +
        String(h12)
      ))
      console.log(answer)

    }
    return answer
  }

  findHighNumber(data)
  //console.log(data)

  return answer;
};
