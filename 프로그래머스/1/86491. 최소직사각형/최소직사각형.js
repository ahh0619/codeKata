function solution(sizes) {
  let result = 0;
  const maxWidth = sizes.map((num) => Math.max(...num));
  const minWidth = sizes.map((num) => Math.min(...num));
  result = Math.max(...maxWidth) * Math.max(...minWidth);
  return result;
}