function solution(n) {
  const result = String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return Number(result);
}