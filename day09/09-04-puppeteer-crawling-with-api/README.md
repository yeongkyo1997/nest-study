이 프로젝트는 Node.js와 Express를 사용하여 구현된 백엔드 서버와 웹 크롤러로 구성되어 있습니다.

## 구조

- [`backend/`](command:_github.copilot.openRelativePath?%5B%22backend%2F%22%5D "backend/"): 백엔드 서버 코드가 위치해 있습니다.
- [`crawler/`](command:_github.copilot.openRelativePath?%5B%22crawler%2F%22%5D "crawler/"): 웹 크롤러 코드가 위치해 있습니다.

## 주요 기능

### 백엔드 서버

- 게시판 API: 게시글을 조회하고 등록할 수 있습니다. ([`backend/index.js`](command:_github.copilot.openRelativePath?%5B%22backend%2Findex.js%22%5D "backend/index.js"))
- 회원가입 API: 사용자의 이메일을 검증하고, 가입 환영 이메일을 전송합니다. ([`backend/index.js`](command:_github.copilot.openRelativePath?%5B%22backend%2Findex.js%22%5D "backend/index.js"))
- 휴대폰 인증 API: 휴대폰 번호를 검증하고, 인증 토큰을 SMS로 전송합니다. ([`backend/index.js`](command:_github.copilot.openRelativePath?%5B%22backend%2Findex.js%22%5D "backend/index.js"))
- 주식 정보 API: 주식 정보를 조회할 수 있습니다. ([`backend/index.js`](command:_github.copilot.openRelativePath?%5B%22backend%2Findex.js%22%5D "backend/index.js"))

### 웹 크롤러

- 네이버 금융에서 삼성전자의 주식 정보를 크롤링하고, MongoDB에 저장합니다. ([`crawler/index.js`](command:_github.copilot.openRelativePath?%5B%22crawler%2Findex.js%22%5D "crawler/index.js"))

## 사용 방법

1. 필요한 모듈을 설치합니다: `npm install`
2. 백엔드 서버를 실행합니다: `node backend/index.js`
3. 웹 크롤러를 실행합니다: `node crawler/index.js`

## 주의 사항

- 이메일과 SMS 전송 기능을 사용하려면, 환경 변수를 설정해야 합니다. ([`backend/email.js`](command:_github.copilot.openRelativePath?%5B%22backend%2Femail.js%22%5D "backend/email.js"), [`backend/phone.js`](command:_github.copilot.openRelativePath?%5B%22backend%2Fphone.js%22%5D "backend/phone.js"))
- MongoDB에 접속하려면, 적절한 접속 문자열을 설정해야 합니다. ([`backend/index.js`](command:_github.copilot.openRelativePath?%5B%22backend%2Findex.js%22%5D "backend/index.js"), [`crawler/index.js`](command:_github.copilot.openRelativePath?%5B%22crawler%2Findex.js%22%5D "crawler/index.js"))
