function solution(my_string) {
  const newArr = my_string.split(" ");
  let acc = Number(newArr[0]);
  newArr.forEach((value, index) => {
    if (value === "+") {
      acc += Number(newArr[index + 1]);
    }
    if (value === "-") {
      acc -= Number(newArr[index + 1]);
    }
    return acc;
  });
  return acc;
}