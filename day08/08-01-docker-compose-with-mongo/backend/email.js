import { getToday } from "./utils.js"
import nodemailer from "nodemailer"
import "dotenv/config.js"

export function checkValidationEmail(myemail) {
  if (myemail === undefined || myemail.includes("@") === false) {
    console.log("에러 발생!!! 이메일을 제대로 입력해 주세요!!!")
    return false
  } else {
    return true
  }
}

export function getWelcomeTemplate({ name, age, school }) {
  const mytemplate = `
        <html>
            <body>
              <div style="display: flex; flex=direction: column; align-items: center;">
                <div style="width: 500px">
                  <h1 style="color: blue">${name}님 가입을 환영합니다!!!</h1>
                  <hr />
                  <div>이름: ${name}</div>
                  <div>나이: ${age}살</div>
                  <div>학교: ${school}</div>
                  <div>가입일: ${getToday()}</div>
                </div>
              </div>
            </body>
        </html>
    `
  return mytemplate
  // console.log(mytemplate)
}

export async function sendTemplateToEmail(myemail, result) {
  const EMAIL_USER = process.env.EMAIL_USER
  const EMAIL_PASS = process.env.EMAIL_PASS
  const EMAIL_SENDER = process.env.EMAIL_SENDER

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  })

  const response = await transporter.sendMail({
    from: EMAIL_USER,
    to: myemail,
    subject: "[코드캠프] 가입을 축하합니다!!!",
    html: result,
  })
  console.log(response)
  // console.log(myemail + "주소로 가입환영 템플릿" + result + "을 전송합니다!!!");
}
