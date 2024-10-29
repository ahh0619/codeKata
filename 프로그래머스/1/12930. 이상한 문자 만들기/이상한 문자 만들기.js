function solution(s) {
  const arrStr = s.split(" ");
  let result = "";
  for (let i = 0; i < arrStr.length; i++) {
    if (i !== 0) result += " ";
    for (let j = 0; j < arrStr[i].length; j++) {
      result +=
        j % 2 === 0 ? arrStr[i][j].toUpperCase() : arrStr[i][j].toLowerCase();
    }
  }
  return result;
}