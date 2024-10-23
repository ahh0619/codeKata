function solution(arr, k) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(k % 2 === 1 ? arr[i] * k : arr[i] + k);
  }
  return result;
}