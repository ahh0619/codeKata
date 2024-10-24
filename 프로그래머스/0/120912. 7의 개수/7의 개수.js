function solution(array) {
  let result = 0;
  const sevens = array.join("");
  for (let i = 0; i < sevens.length; i++) {
    if (sevens[i] === "7") result++;
  }
  return result;
}
