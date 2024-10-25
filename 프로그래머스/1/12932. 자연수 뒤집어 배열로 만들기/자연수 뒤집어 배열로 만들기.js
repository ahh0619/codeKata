function solution(n) {
  const nArr = String(n).split("").reverse();
  return nArr.map((n) => Number(n));
}