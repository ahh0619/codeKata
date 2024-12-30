function solution(s) {
   let answer = '';
   let sArr = s.split(' ');

   let result = sArr.map(x=> x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());

   answer = result.join(" ")
   return answer;
}