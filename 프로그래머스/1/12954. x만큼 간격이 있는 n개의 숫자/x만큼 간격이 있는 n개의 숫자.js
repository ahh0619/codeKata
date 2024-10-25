function solution(x, n) {
  const result = [x];
  for (let i = 0; i < n - 1; i++) {
    result.push(result[i] + x);
  }
  return result;
}