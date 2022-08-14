// const { checkValidationPhone, getToken, sendTokenToSMS } = require("./phone.js");

/**
 * import 방식을 사용하려면 yarn init 후 package.json에 module을 추가해야한다.
 *
 * "type": "module"
 */
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";

console.log("안녕하세요!");

// true "adfdsafdsafsdafdsaf" 123
// false "" 0

function createTokenOfPhone(myphone) {
  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myphone);
  if (isValid === false) {
    return;
  }

  // 2. 핸드폰 토큰 6자리 만들기
  const mytoken = getToken();

  // 3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(myphone, mytoken);
}

createTokenOfPhone("01012345678");
