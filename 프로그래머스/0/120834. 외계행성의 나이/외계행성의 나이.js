function solution(age) {
  let result = "";
  const alphabetAge = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const arrAge = String(age).split("");
  for (const i of arrAge) {
    result += alphabetAge[i];
  }
  return result;
}