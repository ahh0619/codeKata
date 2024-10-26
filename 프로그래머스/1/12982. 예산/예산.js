function solution(d, budget) {
  d.sort((a, b) => a - b);
  let count = 0;
  for (let amount of d) {
    if (budget - amount >= 0) {
      budget -= amount;
      count += 1;
    } else {
      break;
    }
  }
  return count;
}
