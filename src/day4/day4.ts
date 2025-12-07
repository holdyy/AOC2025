export const day4 = (data: string[]) => {
  let answer = 0
  let change = true

  console.log(data)
  function getMap(s: string): string[] {
    return s.split('')
  }

  let rollsMap = data.map(getMap)
  //console.log(rollsMap)

  while (change === true) {
    change = false
    for (let i = 0; i < rollsMap.length; i++) {
      for (let x = 0; x < rollsMap[i].length; x++) {
        const up = rollsMap[i - 1]?.[x]
        const down = rollsMap[i + 1]?.[x]
        const left = rollsMap[i][x - 1]
        const right = rollsMap[i][x + 1]
        const upLeft = rollsMap[i - 1]?.[x - 1];
        const upRight = rollsMap[i - 1]?.[x + 1];
        const downLeft = rollsMap[i + 1]?.[x - 1];
        const downRight = rollsMap[i + 1]?.[x + 1];

        let surround = 0


        if (rollsMap[i][x] === "@") {
          if (up === "@") { surround++ }
          if (down === "@") { surround++ }
          if (left === "@") { surround++ }
          if (right === "@") { surround++ }
          if (upRight === "@") { surround++ }
          if (downRight === "@") { surround++ }
          if (downLeft === "@") { surround++ }
          if (upLeft === "@") { surround++ }


          if (surround < 4) { answer++; rollsMap[i][x] = "."; change = true }
          console.log(up, down, left, right)
          console.log(surround)
          console.log(answer)
        }
      }



    }
  }

  return answer
}
