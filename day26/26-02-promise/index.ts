// new Promise(() => {})
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

// 1. Promise 예제
// const aaa = new Promise((resolve, reject) => {
//   // 시간이 걸리는 작업(API 보내기 등등)
//   if (성공) {
//     const result = "철수";
//     resolve(result);
//   } else if (실패) {
//     reject("에러가 발생했어요!!!");
//   }
// });

//
//
// 2. 내가 axios 개발자라면 어떻게 할까?
const myAxios = {
  get: (url) =>
    new Promise((resolve, reject) => {
      // 백엔드에 API 요청
      const aaa = new XMLHttpRequest();
      aaa.open("get", url);
      aaa.send();
      aaa.addEventListener("load", (res) => {
        resolve(res);
      });
    }),
  post: (url) =>
    new Promise((resolve, reject) => {
      // 백엔드에 API 요청
    }),
};

// myAxios.get("url").then((res) => {
//   console.log(res);
// });

// await myAxios.get("url");

//
//
// 3. Promise 실습
const fetchData = async () => {
  const response = await new Promise((resolve, reject) => {
    // 오래 걸리는 작업
    setTimeout(() => {
      // 2초가 걸리서 백엔드에서 데이터를 받아온다.
      const result = "철수";
      resolve(result);
    }, 2000);
  });
  console.log(`완료된 값은 ${response} 입니다.`);
};

// 실행시간 계산
console.log("시작");
const start = new Date();
fetchData();
const end = new Date();
console.log(`시작시간: ${start}`);
console.log(`완료시간: ${end}`);
console.log(`실행시간: ${Number(end) - Number(start)}`);
