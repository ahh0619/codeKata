function solution(babbling) {
  let result = 0;
  const baby = ["aya", "ye", "woo", "ma"];
  babbling.forEach((word) => {
    let wordLength = word.length;
    for (let i = 0; i < baby.length; i++) {
      if (word.includes(baby[i])) wordLength = wordLength - baby[i].length;
      if (wordLength === 0) {
        result++;
        break;
      }
    }
  });
  return result;
}