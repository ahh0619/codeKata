function solution(phone_number) {
  const PhoneNum = phone_number.slice(0, -4);
  return phone_number.replace(PhoneNum, "*".repeat(PhoneNum.length));
}
