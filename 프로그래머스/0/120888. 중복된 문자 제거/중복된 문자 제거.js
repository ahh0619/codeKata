function solution(my_string) {
  const newWord = my_string.split("");
  return [...new Set(newWord)].join("");
}