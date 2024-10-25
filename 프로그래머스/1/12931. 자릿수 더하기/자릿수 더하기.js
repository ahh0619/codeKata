function solution(n) {
  const nArr = String(n).split("");
  return nArr.reduce((acc, cur) => Number(acc) + Number(cur), 0);
}