function solution(s) {
  let result = [];
  let sArr = s.split("");
  sArr.forEach((item) => {
    if (s.indexOf(item) === s.lastIndexOf(item)) {
      result.push(item);
    }
  });
  return result.sort().join("");
}
