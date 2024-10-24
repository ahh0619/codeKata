function solution(s) {
  const sArr = s.split(" ");
  let temp = [];
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "Z") {
      temp.pop();
      continue;
    }
    temp.push(sArr[i]);
  }
  const result = temp.reduce((acc, cur) => {
    return Number(acc) + Number(cur);
  }, 0);
  return result;
}