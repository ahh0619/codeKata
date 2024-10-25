function solution(x) {
  const strX = String(x);
  let harshad = 0;
  for (let i = 0; i < strX.length; i++) {
    harshad += Number(strX[i]);
  }
  return x % harshad === 0 ? true : false;
}