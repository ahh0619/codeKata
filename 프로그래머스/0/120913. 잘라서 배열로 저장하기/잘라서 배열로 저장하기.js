function solution(my_str, n) {
  const arrStr = [];
  for (let i = 0; i <= my_str.length; i += n) {
    if (my_str.slice(i, n + i) !== "") arrStr.push(my_str.slice(i, n + i));
  }
  return arrStr;
}