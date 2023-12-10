이 프로젝트는 Express를 사용하여 REST API를 구현하고, Swagger를 사용하여 API 문서를 자동화합니다. 또한, CORS를 사용하여 Cross-Origin Resource Sharing을 허용합니다.

## Backend

### 실행 방법

```sh
cd 05-01-rest-api-with-frontend/backend
npm install
npm run dev
```

### 주요 기능

- 게시판 조회: `GET /boards`
- 게시판 등록: `POST /boards`
- API 문서: `GET /api-docs`

## Frontend

회원가입 페이지에서 휴대폰 번호를 입력하면, 해당 번호로 인증번호를 요청하는 기능이 있습니다.

### 실행 방법

웹 서버를 실행하고, [`05-01-rest-api-with-frontend/frontend/signup.html`](command:_github.copilot.openRelativePath?%5B%2205-01-rest-api-with-frontend%2Ffrontend%2Fsignup.html%22%5D "05-01-rest-api-with-frontend/frontend/signup.html") 파일을 열어주세요.

# 05-02-graphql-api-with-apollo-server

이 프로젝트는 Apollo Server를 사용하여 GraphQL API를 구현합니다.

## 실행 방법

```sh
cd 05-02-graphql-api-with-apollo-server
npm install
node index.js
```

# 05-03-graphql-api-with-apollo-server-board

이 프로젝트는 Apollo Server를 사용하여 게시판 관련 GraphQL API를 구현합니다.

## 실행 방법

```sh
cd 05-03-graphql-api-with-apollo-server-board
npm install
node index.js
```